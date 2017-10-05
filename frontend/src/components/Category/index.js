// idêntica à view padrão, mas filtrada para incluir somente postagens com a categoria selecionada
// deve listar todas as categorias disponíveis, que devem se conectar a esta categoria
// deve listar todas as postagens solicitadas pelo voteScore (começando pela pontuação mais alta)
// deve ter um controle para ordenar o método da lista, incluindo, no mínimo, ordenar por voteScore e ordenar por marcação de hora
// deve ter um controle para adicionar novas postagens

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.less';
import { Row, Col, Button, Glyph } from 'elemental';
import * as API from '../../API';
import { fetchCategoryPosts, updateVoteScore } from  '../../actions.js';
import { connect } from 'react-redux';


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
    const { categoryPosts } = this.props;

    return (
      <div className="category">
        <div className="header">
          <Link to="/" className="back-button"><Glyph icon="arrow-left" /></Link>
          <h1>{category}</h1>
        </div>
        <Row className="container">
          <Col>
            <ul className="main-posts">
              {categoryPosts.map((post) => (
                <li key={post.id}>
                  <Row className="post">
                    <Col className="main-votes" xs='10%'>
                      <Button type="link" onClick={() => this.handleVote(post.id, 1)}><Glyph icon="chevron-up" /></Button>
                      <h3>{post.voteScore}</h3>
                      <Button type="link" onClick={() => this.handleVote(post.id, -1)}><Glyph icon="chevron-down" /></Button>
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
        </Row>
      </div>
    );
  }
}

export default connect(state => {
  return {
    categoryPosts: state.categoryPosts,
    voteScore: state.voteScore,
  };
}, { fetchCategoryPosts, updateVoteScore })(Category);
