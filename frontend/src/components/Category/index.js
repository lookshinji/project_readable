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


class Category extends Component {

  state = {
    categoryposts: []
  }

  componentDidMount(){
    const { category } = this.props.match.params;
    API.getCategoryPost(category).then((categoryposts) => {
      console.log(categoryposts);
      this.setState({ categoryposts });
    });
  }

  render() {
    const match = this.props.match;
    const { category } = match.params;

    return (
      <div className="category">
        <div className="header">
          <Link to="/" className="back-button"><Glyph icon="arrow-left" /></Link>
          <h1>{category}</h1>
        </div>
        <Row className="container">
          <Col>
            <ul className="main-posts">
              {this.state.categoryposts.map((post) => (
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
        </Row>
      </div>
    );
  }
}

export default Category;
