//Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Helpers & API
import * as API from '../API';
import { normalizedDate } from '../helpers.js';
//Components
import CommentList from '../components/CommentList';
import Post from '../components/Post';
//Actions
import { fetchPost, fecthComments } from  '../actions.js';

class PostDetails extends Component {

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

  render() {
    const { activepost, comments, handleVote } = this.props;
    return (
      <div className="post-details container">
        <Post date={normalizedDate} post={activepost} handleVote={handleVote} details/>
        <CommentList date={normalizedDate} comments={comments} handleVote={handleVote} />
      </div>
    );
  }
}

export default connect(state => {
  return {
    activepost: state.app.activepost,
    comments: state.app.comments
  };
}, { fetchPost, fecthComments })(PostDetails);
