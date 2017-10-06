// idêntica à view padrão, mas filtrada para incluir somente postagens com a categoria selecionada
// deve listar todas as categorias disponíveis, que devem se conectar a esta categoria
// deve listar todas as postagens solicitadas pelo voteScore (começando pela pontuação mais alta)
// deve ter um controle para ordenar o método da lista, incluindo, no mínimo, ordenar por voteScore e ordenar por marcação de hora
// deve ter um controle para adicionar novas postagens

//Libs
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//API
import * as API from '../../API';

//Components
import { fetchCategories, fetchPosts, updateVoteScore  } from  '../../actions.js';
import PostList from '../PostList/';
import Header from '../Header/';

//Style
import './style.less';
import { Row, Col } from 'elemental';

class Main extends Component {

  componentDidMount(){
    const { fetchCategories, fetchPosts } = this.props;

    API.getCategories()
      .then((categories) => {
        fetchCategories(categories);
      });

    API.getAllPosts()
      .then((posts) => {
        fetchPosts(posts);
      });
  }

  handleVote = (id, vote) => {
    const { updateVoteScore } = this.props;

    API.updateVoteScore(id, vote)
      .then((post) => {
        updateVoteScore(id, post.voteScore);
      });
  }

  render() {
    const { categories, posts } = this.props;
    return (
      <div className="main">
        <Header title='Readable'/>
        <Row className="container">
          <Col xs='70%'>
            <h5 className="subheader">All Posts</h5>
            <ul className="main-posts">
              {posts.map((post) => (
                <li key={post.id}>
                  <PostList post={post} handleVote={this.handleVote} />
                </li>
              ))}
            </ul>
          </Col>
          <Col xs='30%'>
            <h5 className="subheader">Categories</h5>
            <ol className='main-categories'>
              {categories.map((category) => (
                <li key={category.name}><Link to={`category/${category.path}`}>{category.name}</Link></li>
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
}, { fetchCategories, fetchPosts, updateVoteScore })(Main);
