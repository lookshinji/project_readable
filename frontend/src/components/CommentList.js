//Libs
import React from 'react';
//Containers
import CommentForm from '../containers/CommentForm';
//Style
import { Row, Col, Glyph } from 'elemental';
//Components
import Votes from './Votes';

const CommentList = ({ comments, date, handleVote }) => {
  return (
    <div className="container">
      <h3>Comentários</h3>
      <ul className="comment_list">
        {comments.map((comment) => (
          <li key={comment.id}>
            <Row className="comment_header">
              <Votes item={comment} type='comments' handleVote={handleVote} />
              <Col xs='90%'>
                <p className="comment_body">{comment.body}</p>
                <ul className="comment_details">
                  <li>Created <span>{date(comment.timestamp)}</span></li>
                  <li>Author: <span> {comment.author}</span> </li>
                  <li><a><Glyph icon="pencil" /></a></li>
                  <li><a><Glyph icon="trashcan" /></a></li>
                </ul>
              </Col>
            </Row>
          </li>
        ))}
      </ul>
      <h3>Your Comment</h3>
      <CommentForm />
    </div>
  );
};

export default CommentList;
