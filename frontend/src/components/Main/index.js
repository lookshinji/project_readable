// idêntica à view padrão, mas filtrada para incluir somente postagens com a categoria selecionada
// deve listar todas as categorias disponíveis, que devem se conectar a esta categoria
// deve listar todas as postagens solicitadas pelo voteScore (começando pela pontuação mais alta)
// deve ter um controle para ordenar o método da lista, incluindo, no mínimo, ordenar por voteScore e ordenar por marcação de hora
// deve ter um controle para adicionar novas postagens

import React, { Component } from 'react';
import './style.less';
import { Row, Col, Button, Glyph } from 'elemental';
import { Link } from 'react-router-dom';
import * as API from '../../API';
import { fetchCategories, fetchPosts } from  '../../actions.js';
import { connect } from 'react-redux';

class Main extends Component {

  componentDidMount(){
    const { fetchCategories, fetchPosts } = this.props;

    API.getCategories()
      .then((categories) => {
        fetchCategories(categories);
      });

    API.getAllPosts()
      .then((posts) => {
        console.log(posts);
        fetchPosts(posts);
      });
  }

  render() {
    const { categories, posts } = this.props;
    console.log('posts in render', posts);
    return (
      <div className="main">
        <div className="header">
          <h1>Readable</h1>
        </div>
        <Row className="container">
          <Col xs='70%'>
            <h5 className="subheader">All Posts</h5>
            <ul className="main-posts">
              {posts.map((post) => (
                <li key={post.id}>
                  <Row className="post">
                    <Col className="main-votes" xs='10%'>
                      <Button type="link"><Glyph icon="chevron-up" /></Button>
                      <h3>{post.voteScore}</h3>
                      <Button type="link"><Glyph icon="chevron-down" /></Button>
                    </Col>
                    <Col xs='90%'>
                      <h2>{post.title}</h2>
                      <a href="/"><span>31</span>coments</a>
                    </Col>
                  </Row>
                </li>
              ))}
            </ul>
          </Col>
          <Col xs='30%'>
            <h5 className="subheader">Categories</h5>
            <ol className='main-categories'>
              {categories.map((category) => (
                <li key={category.name}><Link to={`${category.path}`}>{category.name}</Link></li>
              ))}
            </ol>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(state => {
  return {
    categories: state.categories,
    posts: state.posts
  };
}, { fetchCategories, fetchPosts })(Main);
