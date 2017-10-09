// deve ter um formulário para criar novas postagens ou editar as existentes
// ao editar, os dados existentes devem ser povoados no formulário

import React from 'react';
import { Field, reduxForm } from 'redux-form';

//styles
import './style.less';

let PostForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

PostForm = reduxForm({
  // a unique name for the form
  form: 'post'
})(PostForm);

export default PostForm;
