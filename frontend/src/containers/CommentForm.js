//Libs
import React from 'react';
import { reduxForm } from 'redux-form';
import { Form, FormInput, FormField } from 'elemental';

let CommentForm = props => {
  const { handleSubmit } = props;

  return (
    <Form onSubmit={ handleSubmit }>
      <FormField label="Comment" htmlFor="post-message">
        <FormInput multiline placeholder="Type a comment " name="post-message" />
      </FormField>
      <FormField label="Name" htmlFor="post-author">
        <FormInput placeholder="Type in your name" name="post-author" />
      </FormField>
    </Form>
  );
};

CommentForm = reduxForm({
  // a unique name for the form
  form: 'comment'
})(CommentForm);

export default CommentForm;
