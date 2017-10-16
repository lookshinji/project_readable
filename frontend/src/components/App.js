// deve listar todas as categorias disponíveis, que devem se conectar a esta categoria
// deve listar todas as postagens solicitadas pelo voteScore (começando pela pontuação mais alta)
// deve ter um controle para ordenar o método da lista, incluindo, no mínimo, ordenar por voteScore e ordenar por marcação de hora
// deve ter um controle para adicionar novas postagens

//Libs
import React from 'react';
import { Route, withRouter } from 'react-router-dom';

//Components
import Category from '../containers/Category';
import Main from '../containers/Main';
import AddPost from './AddPost';
import Post from '../containers/Post';
import Header from '../containers/Header';


const App = ({ history, match, location }) => (
  <div className="app">
    <Header title="Post" history={history} match={match} location={location}/>
    <Route exact path="/" component={Main} />
    <Route path="/add_post" component={AddPost} />
    <Route path="/post/:post" component={Post} />
    <Route path="/category/:category" component={Category} />
  </div>
);

export default withRouter(App);