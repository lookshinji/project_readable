// deve listar todas as categorias disponíveis, que devem se conectar a esta categoria
// deve listar todas as postagens solicitadas pelo voteScore (começando pela pontuação mais alta)
// deve ter um controle para ordenar o método da lista, incluindo, no mínimo, ordenar por voteScore e ordenar por marcação de hora
// deve ter um controle para adicionar novas postagens

//Libs
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './style.less';

//Components
import Category from '../Category/';
import Main from '../Main/';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Main} />
        <Route path="/category" component={Category} />
      </div>
    );
  }
}

export default App;
