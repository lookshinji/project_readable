// idêntica à view padrão, mas filtrada para incluir somente postagens com a categoria selecionada
// deve listar todas as categorias disponíveis, que devem se conectar a esta categoria
// deve listar todas as postagens solicitadas pelo voteScore (começando pela pontuação mais alta)
// deve ter um controle para ordenar o método da lista, incluindo, no mínimo, ordenar por voteScore e ordenar por marcação de hora
// deve ter um controle para adicionar novas postagens

//Libs
import React from 'react';
import { Link } from 'react-router-dom';

//Style
import { Glyph } from 'elemental';
import './style.less';


const Header = (props) => {
  const { title, history } = props;
  return (
    <div className="header">
      <a onClick={() => history.goBack()} onKeyDown={() => history.goBack()} role="link" tabIndex={0} className="back-button"><Glyph icon="arrow-left" /></a>
      <h1>{title ? title : 'Readable' }</h1>
      <Link to="/add_post" className="add-button"><Glyph icon="plus" /></Link>
    </div>
  );
};

export default Header;
