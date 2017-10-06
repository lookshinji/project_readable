// deve mostrar os detalhes da postagem, incluindo: título, corpo, autor, marcação de hora em formato legível pelo usuário e pontuação dos votos
// deve listar todos os comentários daquela postagem, ordenados por voteScore (começando pelo mais alto)
// deve ter um controle para reordenar comentários por pontuação ou marcação de hora
// deve ter controles para acionar a edição ou remoção da postagem
// deve ter um controle para adicionar um novo comentário
// implemente o formulário de comentários da forma que quiser (em linha, modal, etc.)
// os comentários também devem ter controles para edição ou exclusão

import React from 'react';

//Style
import { Row, Col, Button, Glyph } from 'elemental';
import './style.less';

const PostList = (props) => {
  const { post, handleVote } = props;
  return (
    <Row className="post">
      <Col className="main-votes" xs='10%'>
        <Button type="link" onClick={() => handleVote(props.post.id, 1)}><Glyph icon="chevron-up" /></Button>
        <h3>{post.voteScore}</h3>
        <Button type="link" onClick={() => handleVote(props.post.id, -1)}><Glyph icon="chevron-down" /></Button>
      </Col>
      <Col xs='90%'>
        <h2>{post.title}</h2>
        <a href="/"><span>31</span>coments</a>
      </Col>
    </Row>
  );
};

export default PostList;
