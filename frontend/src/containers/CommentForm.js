//Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'elemental';
//Api
import * as API from '../API';
//Actions
import { updateComments } from '../actions';

class CommentForm extends Component {
  submitComment = (values) => {
    const { activepost, updateComments } = this.props;
    API.addComment(activepost.id, values)
      .then((comment) => {
        updateComments(comment);
      });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="comment_form" onSubmit={handleSubmit(this.submitComment)}>
        <Field component="textarea" placeholder="write a comment" name="commentMessage" rows="8"/>
        <Field component="input" placeholder="your name" name="commentAuthor" />
        <Button submit>Send</Button>
      </form>
    );
  }
};

CommentForm = reduxForm({
  form: 'comment'
})(CommentForm);

CommentForm = connect(state => {
  return {
    activepost: state.app.activepost
  };
}, { updateComments })(CommentForm);

export default CommentForm;
