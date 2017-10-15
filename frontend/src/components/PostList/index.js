import React from 'react';
import { Link } from 'react-router-dom';
//Style
import { Row, Col, Button, Glyph } from 'elemental';
import './style.less';

const PostList = (props) => {
  const { post, handleVote } = props;
  return (
    <Row className="post-header">
      <Col className="votes" xs='10%'>
        <Button type="link" onClick={() => handleVote(post.id, 1)}><Glyph icon="chevron-up" /></Button>
        <h4>{post.voteScore}</h4>
        <Button type="link" onClick={() => handleVote(post.id, -1)}><Glyph icon="chevron-down" /></Button>
      </Col>
      <Col xs='90%'>
        <Link to={`/post/${post.id}`}><h2>{post.title}</h2></Link>
      </Col>
    </Row>
  );
};

export default PostList;
