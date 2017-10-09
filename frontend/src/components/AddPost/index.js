import React, { Component } from 'react';

//Components
import Header from '../Header/';
import PostForm from '../PostForm/';

//styles
import './style.less';

class AddPost extends Component{
  submit = (values) => {
    
    console.log(values);
  }
  render() {
    return (
      <div>
        <Header title="Add Post" />
        <PostForm onSubmit={this.submit} />
      </div>
    );
  }
};

export default AddPost;
