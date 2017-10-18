//Libs
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'elemental';

let PostForm = ({categories}) => {
  return (
    <div className="add_post_form">
      <h2>Add a post</h2>
      <form>
        <Field component="input" placeholder="Name" name="post-author" />
        <Field component="select" placeholder="Category" name="post-category">
          <option selected >Category</option>
          {categories.map((category) => (
            <option key={category.name}>{category.name}</option>
          ))}
        </Field>
        <Field component="input" placeholder="Post Title" name="post-title" />
        <Field component="textarea" placeholder="Type a message" name="post-message" rows="8"/>
        <Button>Send</Button>
      </form>
    </div>
  );
};

PostForm = reduxForm({
  // a unique name for the form
  form: 'post'
})(PostForm);

export default connect(state => {
  return {
    categories: state.app.categories,
  };
}, { })(PostForm);
