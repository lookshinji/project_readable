//Libs
import React from 'react';
import { reduxForm } from 'redux-form';
import { Form, FormInput, FormField, FormSelect } from 'elemental';

let PostForm = props => {
  const handleChange = () => {
    return 'hello';
  };

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
        <FormField label="Title" htmlFor="post-title">
          <FormInput placeholder="Type a title for your post" name="post-title" />
        </FormField>
        <FormField label="Message" htmlFor="post-message">
          <FormInput multiline placeholder="Type a message " name="post-message" />
        </FormField>
        <FormField>
          <FormSelect options={categories} firstOption="Country" onChange={handleChange} />
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
