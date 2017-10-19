//Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'elemental';
//Api
import * as API from '../API';
//Actions
import { updatePosts } from '../actions';

class PostForm extends Component {
  submitPost = (values) => {
    const { updatePosts } = this.props;
    API.addPost(values)
      .then((post) => {
        updatePosts(post);
      });
  }

  render() {
    const { categories, handleSubmit } = this.props;
    return (
      <div className="add_post_form">
        <h2>Add a post</h2>
        <form onSubmit={handleSubmit(this.submitPost)}>
          <Field component="input" placeholder="Post Title" name="postTitle" />
          <Field component="select" placeholder="Category" name="postCategory">
            <option defaultValue >Category</option>
            {categories.map((category) => (
              <option key={category.name}>{category.name}</option>
            ))}
          </Field>
          <Field component="textarea" placeholder="Type a message" name="postMessage" rows="8"/>
          <Field component="input" placeholder="Name" name="postAuthor" />
          <Button submit >Send</Button>
        </form>
      </div>
    );
  };
};

PostForm = reduxForm({
  form: 'post'
})(PostForm);

PostForm = connect(state => {
  return {
    categories: state.app.categories
  };
}, { updatePosts })(PostForm);

export default PostForm;
