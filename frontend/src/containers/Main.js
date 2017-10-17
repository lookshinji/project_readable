// idêntica à view padrão, mas filtrada para incluir somente postagens com a categoria selecionada
// deve listar todas as categorias disponíveis, que devem se conectar a esta categoria
// deve listar todas as postagens solicitadas pelo voteScore (começando pela pontuação mais alta)
// deve ter um controle para ordenar o método da lista, incluindo, no mínimo, ordenar por voteScore e ordenar por marcação de hora
// deve ter um controle para adicionar novas postagens

//Libs
import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

//API
import * as API from '../API';

//Components
import { fetchCategories, fetchCategoryPosts, fetchPosts, updateVoteScore  } from  '../actions';
import PostList from '../components/PostList';

//Style
import { Row, Col } from 'elemental';

class Main extends Component {

  componentDidMount(){
    const { fetchCategories, fetchPosts, fetchCategoryPosts } = this.props;
    const { category } = this.props.match.params;

    API.getCategories()
      .then((categories) => {
        fetchCategories(categories);
      });

    if (category === undefined ) {
      API.getAllPosts()
        .then((posts) => {
          fetchPosts(posts);
        });
    } else {
      API.getCategoryPost(category)
        .then((categoryPosts) => {
          fetchCategoryPosts(categoryPosts);
        });
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.match.params !== this.props.match.params) {
      const { category } = this.props.match.params;
      const { fetchCategoryPosts } = this.props;

      if (category === undefined ) {
        API.getAllPosts()
          .then((posts) => {
            fetchPosts(posts);
          });
      } else {
        API.getCategoryPost(category)
          .then((categoryPosts) => {
            fetchCategoryPosts(categoryPosts);
          });
      }
    }
  }

  handleVote = (id, vote) => {
    const { updateVoteScore } = this.props;

    API.updateVoteScore(id, vote)
      .then((post) => {
        updateVoteScore(id, post.voteScore);
      });
  }

  render() {
    const { categories, posts, match } = this.props;
    const categoryName = match.params.category;
    return (
      <div className="main">
        <Row className="container">
          <Col xs='70%'>
            <div className="subheader">
              <h4>{ categoryName ? `Category: ${categoryName}` : 'All Posts'}</h4>
              <ul>
                <li><h5>sort by:</h5></li>
                <li><Link to="#">date</Link></li>
                <li><Link to="#">vote</Link></li>
              </ul>
            </div>
            <ul className="main-posts">
              <PostList posts={posts} handleVote={this.handleVote} />
            </ul>
          </Col>
          <Col xs='30%'>
            <div className="subheader">
              <h4>Categories</h4>
            </div>
            <ol className='main-categories'>
              {categories.map((category) => (
                <li key={category.name}><NavLink activeClassName="main-categories--selected" to={`/${category.path}`}>{category.name}</NavLink></li>
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
    categories: state.app.categories,
    posts: state.app.posts
  };
}, { fetchCategories, fetchCategoryPosts, fetchPosts, updateVoteScore })(Main);
