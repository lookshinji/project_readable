//Libs
import React from 'react';
//Helpers
import { normalizedDate } from '../helpers.js';
//Components
import Post from '../components/Post';

const PostList = ({ posts, handleVote, handleDeletePost }) => {
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li key={post.id}>
          <Post date={normalizedDate} post={post} handleVote={handleVote} handleDeletePost={handleDeletePost} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
