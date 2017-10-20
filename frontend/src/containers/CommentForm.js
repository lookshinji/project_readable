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
      });
    reset();
  }

  render() {
    const { handleSubmit, pristine, reset } = this.props;
    const data = {
      // used to populate "account" reducer when "Load" is clicked
      commentAuthor: 'Jane',
      commentMessage: 'Born to write amazing Redux code.'
    }
    return (
      <form className="comment_form" onSubmit={handleSubmit(this.submitComment)}>
        <div>
          <button type="button" onClick={() => load(data)}>
            Load Account
          </button>
        </div>
        <Field component="textarea" placeholder="write a comment" name="commentMessage" rows="8"/>
        <Field component="input" placeholder="your name" name="commentAuthor" />
        <Button submit disabled={pristine || submitting}>Send</Button>
        <Button disabled={pristine || submitting} onClick={reset}>
          Undo Changes
        </Button>
      </form>
    );
  }
};

CommentForm = reduxForm({
  form: 'comment'
})(CommentForm);

CommentForm = connect(state => {
  return {
    commentData: state.app.commentData
  };
}, { updateComments })(CommentForm);

export default CommentForm;
