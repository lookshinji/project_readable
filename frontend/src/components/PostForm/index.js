// deve ter um formulário para criar novas postagens ou editar as existentes
// ao editar, os dados existentes devem ser povoados no formulário

import React, { Component } from 'react';

//Components
import Header from '../Header/';

//styles
import './style.less';

class PostForm extends Component {
  render() {
    return (
      <div className="App">
        <Header title='Add Post'/>
      </div>
    );
  }
}

export default PostForm;
