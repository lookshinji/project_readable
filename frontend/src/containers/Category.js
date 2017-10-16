// idêntica à view padrão, mas filtrada para incluir somente postagens com a categoria selecionada
// deve listar todas as categorias disponíveis, que devem se conectar a esta categoria
// deve listar todas as postagens solicitadas pelo voteScore (começando pela pontuação mais alta)
// deve ter um controle para ordenar o método da lista, incluindo, no mínimo, ordenar por voteScore e ordenar por marcação de hora
// deve ter um controle para adicionar novas postagens

//Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';

//API
import * as API from '../API';

//Components
import { fetchCategoryPosts, updateVoteScore } from  '../actions';
import PostList from '../components/PostList';

//Style
import { Row, Col } from 'elemental';

class Category extends Component {
  componentDidMount(){
    const { category } = this.props.match.params;
    const { fetchCategoryPosts } = this.props;

    API.getCategoryPost(category)
      .then((categoryPosts) => {
        fetchCategoryPosts(categoryPosts);
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
    console.log(this.props.match.params);
    const { posts } = this.props;

    return (
      <div className="category">
        <Row className="container">
          <Col>
            <PostList posts={posts} handleVote={this.handleVote} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(state => {
  return {
    posts: state.app.posts,
    voteScore: state.app.voteScore,
  };
}, { fetchCategoryPosts, updateVoteScore })(Category);
