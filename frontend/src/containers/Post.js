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
import * as API from '../API';

//Components
import { fetchPost, fecthComments, updateVoteScore } from  '../actions.js';
import CommentList from '../components/CommentList';

//Style
import { Row, Col, Button, Glyph} from 'elemental';

class Post extends Component {

  componentDidMount(){
    const { post } = this.props.match.params;
    const { fetchPost, fecthComments } = this.props;

    API.getPost(post)
      .then((post) => {
        fetchPost(post);
      });

    API.getComments(post)
      .then((comments) => {
        fecthComments(comments);
      });
  };

  handleVote = (id, vote) => {
    const { updateVoteScore } = this.props;

    API.updateVoteScore(id, vote)
      .then((post) => {
        updateVoteScore(id, post.voteScore);
      });
  }

  normalizedDate = (sistemdate) => {
    const date = new Date(sistemdate).toLocaleDateString();
    const time = new Date(sistemdate).toLocaleTimeString().slice(3,-3);
    return `em ${date} às ${time}`;
  };

  render() {
    const { activepost, comments } = this.props;

    return (
      <div>
        <Row className="post-header">
          <Col className="votes" xs='10%'>
            <Button type="link" onClick={() => this.handleVote(activepost.id, 1)}><Glyph icon="chevron-up" /></Button>
            <h4>{activepost.voteScore}</h4>
            <Button type="link" onClick={() => this.handleVote(activepost.id, -1)}><Glyph icon="chevron-down" /></Button>
          </Col>
          <Col xs='90%'>
            <h2>{activepost.title}</h2>
            <p>Criado em <span>{this.normalizedDate(activepost.timestamp)}</span> por <span>{activepost.author}</span> | {activepost.category}</p>
          </Col>
        </Row>
        <Row className="post-body">
          <Col>
            <p>{activepost.body}</p>
          </Col>
        </Row>
        <CommentList date={this.normalizedDate} comments={comments} />
      </div>
    );
  }
}

export default connect(state => {
  return {
    activepost: state.app.activepost,
    comments: state.app.comments
  };
}, { fetchPost, fecthComments, updateVoteScore })(Post);
