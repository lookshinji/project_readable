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
        <Votes item={post} type='posts' handleVote={handleVote} / >
        <div>
          { details ?
            <h2>{post.title}</h2> :
            <Link to={{pathname: `/${post.category}/${post.id}`, state: {fromPost: true}}}><h2>{post.title}</h2></Link>
          }
          <ul className="post_details">
            <li>Created <span>{date(post.timestamp)}</span></li>
            <li>Author: <span> {post.author}</span> </li>
            <li>Category: {post.category}</li>
            <li><a><Glyph icon="pencil" /></a></li>
            <li><a><Glyph icon="trashcan" /></a></li>
          </ul>
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
