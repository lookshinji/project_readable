// deve ter um formulário para criar novas postagens ou editar as existentes
// ao editar, os dados existentes devem ser povoados no formulário

import React from 'react';
import { reduxForm } from 'redux-form';
import { Form, FormInput, FormField } from 'elemental';

// id	< Autmático
// timestamp	< Autmático Date.now()
// voteScore	< (default: 1)
// deleted

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
