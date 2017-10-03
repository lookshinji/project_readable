// idêntica à view padrão, mas filtrada para incluir somente postagens com a categoria selecionada
// deve listar todas as categorias disponíveis, que devem se conectar a esta categoria
// deve listar todas as postagens solicitadas pelo voteScore (começando pela pontuação mais alta)
// deve ter um controle para ordenar o método da lista, incluindo, no mínimo, ordenar por voteScore e ordenar por marcação de hora
// deve ter um controle para adicionar novas postagens

import React, { Component } from 'react';
import './style.less';
import { Row, Col, Button, Glyph } from 'elemental';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <h2>Readable</h2>
        </div>
        <Row className="container">
          <Col xs='70%'>
            <h5 className="subheader">Posts</h5>
            <ul className="main-posts">
              <li>
                <Row className="post">
                  <Col className="main-votes" xs='10%'>
                    <Button type="link"><Glyph icon="chevron-up" /></Button>
                    <h3>12</h3>
                    <Button type="link"><Glyph icon="chevron-down" /></Button>
                  </Col>
                  <Col xs='90%'>
                    <h2 href="/post">Title of post, it's probably very long</h2>
                    <a href="/"><span>31</span>coments</a>
                  </Col>
                </Row>
              </li>
            </ul>
          </Col>
          <Col xs='30%'>
            <h5 className="subheader">Categories</h5>
            <ol className='main-categories'>
              <li>cience</li>
              <li>cience</li>
              <li>cience</li>
            </ol>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main;
