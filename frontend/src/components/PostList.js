import React from 'react';
import { Link } from 'react-router-dom';

//Style
import { Row, Col, Button, Glyph } from 'elemental';

const PostList = ({ posts, handleVote }) => {
  return (
    <ul className="main-posts">
      {posts.map((post) => (
        <li key={post.id}>
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
        </li>
      ))}
    </ul>
  );
};

export default PostList;
