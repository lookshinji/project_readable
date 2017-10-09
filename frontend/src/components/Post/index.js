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
import { fetchPost } from  '../../actions.js';

//Style
import { Row, Col, Button, Glyph} from 'elemental';
import './style.less';

class Post extends Component {

  componentDidMount(){
    const postId = '8xf0y6ziyjabvozdd253nd';
    const { fetchPost } = this.props;

    API.getPost(postId)
      .then((post) => {
        fetchPost(post);
      });
  };

  render() {
    return (
      <div>
        <Header title="Post" />
        <Row className="post-header">
          <Col className="votes" xs='10%'>
            <Button type="link"><Glyph icon="chevron-up" /></Button>
            <h4s>10</h4s>
            <Button type="link"><Glyph icon="chevron-down" /></Button>
          </Col>
          <Col xs='90%'>
            <h2>{this.props.activepost.title}</h2>
            <p>Criado em <span>28/03/2017 às 15:30</span> por <span>author</span> | categoria</p>
          </Col>
        </Row>
        <Row className="post-body">
          <Col>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ligula sapien, at dapibus libero consequat in. Donec quis bibendum risus, eu fringilla felis. Nam condimentum mollis nisi at elementum. Morbi sagittis fermentum nunc. Ut nisi nisi, suscipit sed tincidunt in, finibus et nisi. Aliquam at leo vel dolor efficitur egestas ultricies et nunc. Integer rutrum et nisl in ultricies. Fusce gravida nulla nisl, id accumsan lacus tincidunt id. Fusce venenatis vitae tortor at consequat.</p>

            <p>Pellentesque tempor eros sit amet fringilla venenatis. Vivamus rutrum elementum molestie. Praesent eget pharetra urna, vel egestas dolor. Curabitur ut nibh vulputate, iaculis eros sed, pellentesque enim. Morbi molestie diam lacus, a posuere felis elementum eget. Pellentesque ultricies consequat ligula, sit amet aliquam justo. Fusce dignissim ex vel mi faucibus tempus. Quisque hendrerit eget nibh nec feugiat. Praesent purus magna, euismod ut nulla vel, pretium varius felis. Vestibulum id faucibus orci, non tincidunt mi. Curabitur nec orci vitae felis elementum bibendum. Sed mollis ultricies ipsum, consequat dignissim odio. Curabitur et leo et mi lacinia consequat ut a est. Fusce volutpat odio aliquam diam ultricies tempor. Pellentesque mattis risus purus, rutrum volutpat ante mollis ac. Curabitur lobortis augue felis.</p>

            <p>Nulla ultrices lacinia urna vel convallis. Duis turpis ante, tempus a ornare id, congue ac ante. Suspendisse nec ante dui. Aenean malesuada tortor et ligula porttitor, quis tempor orci luctus. Maecenas ut ante convallis, pellentesque nulla congue, porta enim. Quisque lobortis risus ut rutrum porttitor. Donec viverra, velit at vulputate consequat, arcu dui bibendum arcu, ut ullamcorper mauris libero nec neque. Praesent feugiat justo eget arcu rutrum facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus egestas urna id iaculis elementum. Duis ut nulla elit. Ut augue nisi, vestibulum vehicula sagittis eget, faucibus malesuada dui. Curabitur ac porttitor nulla. In hac habitasse platea dictumst. Proin consectetur quam ac bibendum vestibulum. Nam sit amet faucibus lacus, at tincidunt orci.</p>
          </Col>
        </Row>
        <Row className="comments">
          <Col>
            <h3>Comentários</h3>
            <div className="comment">
              <Row className="comment-header">
                <Col className="votes" xs='10%'>
                  <Button type="link"><Glyph icon="chevron-up" /></Button>
                  <h4>10</h4>
                  <Button type="link"><Glyph icon="chevron-down" /></Button>
                </Col>
                <Col xs='90%'>
                  <h3>Nome muito longo para um post deste estilo</h3>
                  <p>Criado em <span>28/03/2017 às 15:30</span> por <span>author</span> | categoria</p>
                </Col>
              </Row>
              <Row className="comment-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ligula sapien, at dapibus libero consequat in. Donec quis bibendum risus, eu fringilla felis. Nam condimentum mollis nisi at elementum. Morbi sagittis fermentum nunc. Ut nisi nisi, suscipit sed tincidunt in, finibus et nisi. Aliquam at leo vel dolor efficitur egestas ultricies et nunc. Integer rutrum et nisl in ultricies. Fusce gravida nulla nisl, id accumsan lacus tincidunt id. Fusce venenatis vitae tortor at consequat.</p>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(state => {
  return {
    activepost: state.app.activepost
  };
}, { fetchPost })(Post);
