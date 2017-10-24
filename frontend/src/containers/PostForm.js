//Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'elemental';
//Api
import * as API from '../API';
//Actions
import { updatePosts, editPost } from '../actions';

class PostForm extends Component {
  submitPost = (values) => {
    const { updatePosts, reset, history } = this.props;
    API.addPost(values)
      .then((post) => {
        updatePosts(post);
        reset();
        history.push('/');
      });
  }

  submitPostChange = (values) => {
    const { postId, editPost, reset, history } = this.props;
    API.editPost(postId, values)
      .then((post) => {
        editPost(post);
        reset();
        history.push('/');
      });
  }

  render() {
    const { categories, handleSubmit, postId } = this.props;
    return (
      <div className="add_post_form">
        <h2>Add a post</h2>
        <form onSubmit={handleSubmit(postId ? this.submitPostChange : this.submitPost)}>
          <Field component="input" placeholder="Post Title" name="postTitle" />
          <Field component="select" placeholder="Category" name="postCategory" disabled={postId ? true : false}>
            <option defaultValue >Category</option>
            {categories.map((category) => (
              <option key={category.name}>{category.name}</option>
            ))}
          </Field>
          <Field component="textarea" placeholder="Type a message" name="postMessage" rows="8"/>
          <Field component="input" placeholder="Name" name="postAuthor" disabled={postId ? true : false}/>
          <Button submit>{postId ? 'Save Changes' : 'Add Post' }</Button>
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
    categories: state.app.categories,
    postId: state.app.postId
  };
}, { updatePosts, editPost })(PostForm);

export default PostForm;
