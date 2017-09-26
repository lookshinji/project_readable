// idêntica à view padrão, mas filtrada para incluir somente postagens com a categoria selecionada
// deve listar todas as categorias disponíveis, que devem se conectar a esta categoria
// deve listar todas as postagens solicitadas pelo voteScore (começando pela pontuação mais alta)
// deve ter um controle para ordenar o método da lista, incluindo, no mínimo, ordenar por voteScore e ordenar por marcação de hora
// deve ter um controle para adicionar novas postagens

import React, { Component } from 'react';
import './style.css';
import { Row, Col, Button, Glyph } from 'elemental';

class Category extends Component {
  render() {
    return (
      <div className="category">
        <div className="category-header">
          <h2>Category</h2>
        </div>
        <ul className="category-lists">
          <li>
            <Row>
              <Col xs='10%'>
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
      </div>
    );
  }
}

export default Category;
