import React, { Component } from 'react';

//Containers
import PostForm from '../containers/PostForm';

class AddPost extends Component{
  submit = (values) => {

    console.log(values);
  }
  render() {
    return (
      <div>
        <PostForm onSubmit={this.submit} />
      </div>
    );
  }
};

export default AddPost;
