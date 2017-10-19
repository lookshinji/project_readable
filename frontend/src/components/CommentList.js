//Libs
import React from 'react';
//Containers
import CommentForm from '../containers/CommentForm';
//Style
import { Button, Glyph } from 'elemental';
//Components
import Votes from './Votes';

const CommentList = ({ comments, date, handleVote, handleDelete }) => {
  return (
    <div className="comment container">
      <h3>Comments ({comments.length})</h3>
      <ul className="comment_list">
        {comments.map((comment) => (
          <li key={comment.id}>
            <div className="comment_header">
              <Votes item={comment} type='comments' handleVote={handleVote} />
              <div>
                <p className="comment_body">{comment.body}</p>
                <ul className="comment_details">
                  <li><Glyph icon="calendar" /> <span>{date(comment.timestamp)}</span></li>
                  <li><Glyph icon="person" /> <span> {comment.author}</span> </li>
                  <li><Button type="link"><Glyph icon="pencil" /></Button></li>
                  <li><Button type="link" onClick={() => handleDelete(comment.id)}><Glyph icon="trashcan"/></Button></li>
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <h3>Add a comment</h3>
      <CommentForm />
    </div>
  );
};

export default CommentList;
