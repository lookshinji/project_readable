import React, { Component } from 'react';

//Components
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
        <PostForm onSubmit={this.submit} />
      </div>
    );
  }
};

export default AddPost;
