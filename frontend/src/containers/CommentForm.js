//Libs
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'elemental';

let CommentForm = props => {
  return (
    <form className="comment_form">
      <Field component="textarea" placeholder="write a comment" name="comment-message" rows="8"/>
      <Field component="input" placeholder="your name" name="comment-author" />
      <Button>Send</Button>
    </form>
  );
};

CommentForm = reduxForm({
  // a unique name for the form
  form: 'comment'
})(CommentForm);

export default CommentForm;
