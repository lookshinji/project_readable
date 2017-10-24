//Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'elemental';
//Api
import * as API from '../API';
//Actions
import { updateComments, editComment } from '../actions';

class CommentForm extends Component {
  submitComment = (values) => {
    const { activepost, updateComments, reset } = this.props;
    API.addComment(activepost.id, values)
      .then((comment) => {
        updateComments(comment);
        reset();
      });
  }

  submitCommentChange = (values) => {
    const { commentId, editComment, reset, clearForm } = this.props;
    API.editComment(commentId, values)
      .then((comment) => {
        editComment(comment);
        clearForm();
        reset();
      });
  }

  render() {
    const { handleSubmit, commentId } = this.props;
    return (
      <form className="comment_form" onSubmit={handleSubmit(commentId ? this.submitCommentChange : this.submitComment)}>
        <Field component="textarea" placeholder="write a comment" name="commentMessage" rows="8"/>
        <Field component="input" placeholder="your name" name="commentAuthor" disabled={commentId ? true : false } />
        <Button submit>{commentId ? 'Save Changes' : 'Add Comment' }</Button>
      </form>
    );
  }
};

CommentForm = reduxForm({
  form: 'comment'
})(CommentForm);

CommentForm = connect(state => {
  return {
    activepost: state.app.activepost,
    commentData: state.app.commentData,
  };
}, { updateComments, editComment })(CommentForm);

export default CommentForm;
