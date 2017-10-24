//Libs
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { change } from 'redux-form';
import { connect } from 'react-redux';
//Style
import { Row, Col, Button, Glyph} from 'elemental';
//Components
import Votes from './Votes';
//Actions
import { savePost } from '../actions';


class Post extends Component {
  editPost = (post) => {
    const { change, savePost } = this.props;
    change('post', 'postTitle', post.title);
    change('post', 'postMessage', post.body);
    change('post', 'postAuthor', post.author);
    change('post', 'postCategory', post.category);
    savePost(post.id);
  };

  render() {
    const { post, date, handleVote, details, handleDeletePost } = this.props;
    return (
      <div className="post">
        <div className="post_header">
          <Votes item={post} type={details ? 'activepost' : 'posts'} handleVote={handleVote} / >
          <div>
            { details ?
              <h2>{post.title}</h2> :
              <Link to={{pathname: `/${post.category}/${post.id}`, state: {fromPost: true}}}><h2>{post.title}</h2></Link>
            }
            <ul className="post_details">
              <li><Glyph icon="calendar" /><span>{date(post.timestamp)}</span></li>
              <li><Glyph icon="person" /> <span> {post.author}</span> </li>
              <li>
                <Button type="link" component={<Link to='/add_post' />} onClick={() => this.editPost(post)}>
                  <Glyph icon="pencil"/>
                </Button>
              </li>
              <li><Button type="link" onClick={() => handleDeletePost(post.id)}><Glyph icon="trashcan"/></Button></li>
            </ul>
            { details ?
              null :
              <Link to={{pathname: `/${post.category}/${post.id}/`, state: {fromPost: true}}}>{post.comments} comments</Link>
            }
          </div>
        </div>
        { details ?
          <Row className="post_body">
            <Col>
              <p>{post.body}</p>
            </Col>
          </Row> :
          null
        }
      </div>
    );
  }
}


Post = connect(state => {
  return {
    posts: state.app.posts,
    postId: state.app.postId
  };
}, { change, savePost })(Post);

export default Post;
