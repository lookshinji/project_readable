// idêntica à view padrão, mas filtrada para incluir somente postagens com a categoria selecionada
// deve listar todas as categorias disponíveis, que devem se conectar a esta categoria
// deve listar todas as postagens solicitadas pelo voteScore (começando pela pontuação mais alta)
// deve ter um controle para ordenar o método da lista, incluindo, no mínimo, ordenar por voteScore e ordenar por marcação de hora
// deve ter um controle para adicionar novas postagens

import React, { Component } from 'react';
import './style.css';

class Category extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Category</h2>
        </div>
      </div>
    );
  }
}

export default Category;
