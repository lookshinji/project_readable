//Libs
import React from 'react';
import { Link } from 'react-router-dom';
//Style
import { Row, Col, Glyph} from 'elemental';
//Components
import Votes from './Votes';

const Post = ({ post, date, handleVote, details }) => {
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
            <li><a><Glyph icon="pencil" /></a></li>
            <li><a><Glyph icon="trashcan" /></a></li>
          </ul>
          { details ?
            null :
            <a>31 comments</a>
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
};

export default Post;
