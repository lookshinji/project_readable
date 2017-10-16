import React from 'react';

//Containers
import CommentForm from '../containers/CommentForm';

//Style
import { Row, Col, Button, Glyph } from 'elemental';

const CommentList = ({ comments, date }) => {
  return (
    <Row className="comments">
      <Col>
        <h3>Comentários</h3>
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <Row className="comment-header">
              <Col className="votes" xs='10%'>
                <Button type="link"><Glyph icon="chevron-up" /></Button>
                <h4>{comment.voteScore}</h4>
                <Button type="link"><Glyph icon="chevron-down" /></Button>
              </Col>
              <Col xs='90%'>
                <h3>{comment.author} em <span>{date(comment.timestamp)}</span></h3>
                <p>{comment.body}</p>
              </Col>
            </Row>
          </div>
        ))}
        <h3>Your Comment</h3>
        <CommentForm />
      </Col>
    </Row>
  );
};

export default CommentList;
