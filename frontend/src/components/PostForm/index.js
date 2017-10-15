// deve ter um formulário para criar novas postagens ou editar as existentes
// ao editar, os dados existentes devem ser povoados no formulário

import React from 'react';
import { reduxForm } from 'redux-form';
import { Form, FormInput, FormField, FormSelect } from 'elemental';

//styles
import './style.less';

// id	< Autmático
// timestamp	< Autmático Date.now()
// voteScore	< (default: 1)
// deleted

let PostForm = props => {
  const { handleSubmit } = props;

  const categories = [
  	{ label: 'Caramel',    value: 'caramel' },
  	{ label: 'Chocolate',  value: 'chocolate' },
  	{ label: 'Strawberry', value: 'strawberry' },
  	{ label: 'Vanilla',    value: 'vanilla', disabled: true }
  ];

  return (
    <div className="form-container">
      <Form onSubmit={ handleSubmit }>
        <FormField width="one-half" label="Title" htmlFor="post-title">
          <FormInput placeholder="Type a title for your post" name="post-title" />
        </FormField>
        <FormField label="Message" htmlFor="post-message">
          <FormInput multiline placeholder="Type a message " name="post-message" />
        </FormField>
        <FormField>
          <FormSelect options={categories} firstOption="Country" />
        </FormField>
        <FormField label="Name" htmlFor="post-author">
          <FormInput placeholder="Type in your name" name="post-author" />
        </FormField>
      </Form>
    </div>
  );
};

PostForm = reduxForm({
  // a unique name for the form
  form: 'post'
})(PostForm);

export default PostForm;
