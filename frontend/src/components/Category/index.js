// idêntica à view padrão, mas filtrada para incluir somente postagens com a categoria selecionada
// deve listar todas as categorias disponíveis, que devem se conectar a esta categoria
// deve listar todas as postagens solicitadas pelo voteScore (começando pela pontuação mais alta)
// deve ter um controle para ordenar o método da lista, incluindo, no mínimo, ordenar por voteScore e ordenar por marcação de hora
// deve ter um controle para adicionar novas postagens

//Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';

//API
import * as API from '../../API';

//Components
import { fetchCategoryPosts, updateVoteScore } from  '../../actions.js';
import Header from '../Header/';
import PostList from '../PostList/';

//Style
import { Row, Col } from 'elemental';
import './style.less';


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
    const match = this.props.match;
    const { category } = match.params;
    const { posts } = this.props;

    return (
      <div className="category">
        <Header title={category}/>
        <Row className="container">
          <Col>
            <ul className="main-posts">
              {posts.map((post) => (
                <li key={post.id}>
                  <PostList post={post} handleVote={this.handleVote} />
                  {console.log(post.id)}
                </li>
              ))}
            </ul>
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
