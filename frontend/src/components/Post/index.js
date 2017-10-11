// deve mostrar os detalhes da postagem, incluindo: título, corpo, autor, marcação de hora em formato legível pelo usuário e pontuação dos votos
// deve listar todos os comentários daquela postagem, ordenados por voteScore (começando pelo mais alto)
// deve ter um controle para reordenar comentários por pontuação ou marcação de hora
// deve ter controles para acionar a edição ou remoção da postagem
// deve ter um controle para adicionar um novo comentário
// implemente o formulário de comentários da forma que quiser (em linha, modal, etc.)
// os comentários também devem ter controles para edição ou exclusão

//Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';

//API
import * as API from '../../API';

//Components
import Header from '../Header/';
import { fetchPost, fecthComments } from  '../../actions.js';

//Style
import { Row, Col, Button, Glyph} from 'elemental';
import './style.less';

class Post extends Component {

  componentDidMount(){
    const postId = '8xf0y6ziyjabvozdd253nd';
    const { fetchPost, fecthComments } = this.props;

    API.getPost(postId)
      .then((post) => {
        fetchPost(post);
      });

    API.getComments(postId)
      .then((comments) => {
        fecthComments(comments);
      });
  };


  render() {
    const { activepost, comments } = this.props;

    const normalizedDate = (sistemdate) => {
      const date = new Date(sistemdate).toLocaleDateString();
      const time = new Date(sistemdate).toLocaleTimeString().slice(3,-3);
      return `em ${date} às ${time}`;
    };


    return (
      <div>
        <Header title="Post" />
        <Row className="post-header">
          <Col className="votes" xs='10%'>
            <Button type="link"><Glyph icon="chevron-up" /></Button>
            <h4>{activepost.voteScore}</h4>
            <Button type="link"><Glyph icon="chevron-down" /></Button>
          </Col>
          <Col xs='90%'>
            <h2>{activepost.title}</h2>
            <p>Criado em <span>{normalizedDate(activepost.timestamp)}</span> por <span>{activepost.author}</span> | {activepost.category}</p>
          </Col>
        </Row>
        <Row className="post-body">
          <Col>
            <p>{activepost.body}</p>
          </Col>
        </Row>
        <Row className="comments">
          <Col>
            <h3>Comentários</h3>
            {comments.map((comment) => (
              <div className="comment" key={comment.id}>
                <Row className="comment-header">
                  <Col className="votes" xs='10%'>
                    <Button type="link"><Glyph icon="chevron-up" /></Button>
                    <h4>{comment.voteScore}</h4>
                    <Button type="link"><Glyph icon="chevron-down" /></Button>
                  </Col>
                  <Col xs='90%'>
                    <h3>{comment.author} em <span>{normalizedDate(comment.timestamp)}</span></h3>
                    <p>{comment.body}</p>
                  </Col>
                </Row>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(state => {
  return {
    activepost: state.app.activepost,
    comments: state.app.comments
  };
}, { fetchPost, fecthComments })(Post);
