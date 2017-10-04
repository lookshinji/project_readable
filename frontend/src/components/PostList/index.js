// deve mostrar os detalhes da postagem, incluindo: título, corpo, autor, marcação de hora em formato legível pelo usuário e pontuação dos votos
// deve listar todos os comentários daquela postagem, ordenados por voteScore (começando pelo mais alto)
// deve ter um controle para reordenar comentários por pontuação ou marcação de hora
// deve ter controles para acionar a edição ou remoção da postagem
// deve ter um controle para adicionar um novo comentário
// implemente o formulário de comentários da forma que quiser (em linha, modal, etc.)
// os comentários também devem ter controles para edição ou exclusão

import React, { Component } from 'react';
import './style.less';

class Post extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>POST</h2>
        </div>
      </div>
    );
  }
}

export default Post;
