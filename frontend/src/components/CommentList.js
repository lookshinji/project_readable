//Libs
import React, { Component } from 'react';
import { change } from 'redux-form';
import { connect } from 'react-redux';
//Containers
import CommentForm from '../containers/CommentForm';
//Style
import { Button, Glyph } from 'elemental';
//Components
import Votes from './Votes';

class CommentList extends Component {
  state = {
    commentId: ''
  }

  editComment = (comment) => {
    const { change } = this.props;
    change('comment', 'commentMessage', comment.body);
    change('comment', 'commentAuthor', comment.author);
    this.setState({commentId: comment.id});
  };

  render() {
    const { comments, date, handleVote, handleDelete } = this.props;
    return (
      <div className="comment container">
        <h3 id="comments">Comments ({comments.length})</h3>
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
                    <li><Button type="link" onClick={() => this.editComment(comment)}><Glyph icon="pencil" /></Button></li>
                    <li><Button type="link" onClick={() => handleDelete(comment.id)}><Glyph icon="trashcan"/></Button></li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <h3 id="edit_comment">{this.state.commentId ? 'Edit Comment' : 'Add a comment'}</h3>
        <CommentForm clearForm={() => this.setState({commentId: ''})} commentId={this.state.commentId}/>
      </div>
    );
  }
};

CommentList = connect(state => {
  return {
    comments: state.app.comments
  };
}, { change })(CommentList);

export default CommentList;
