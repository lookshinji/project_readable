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
import { fetchPost, fecthComments, deleteComment } from  '../actions.js';

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

  onDeleteComment = (commentId) => {
    const { deleteComment } = this.props;
    API.deleteComment(commentId);
    deleteComment(commentId);
  }

  render() {
    const { activepost, comments, handleVote, handleDeletePost } = this.props;
    return (
      <div className="post-details container">
        <Post date={normalizedDate} post={activepost} handleVote={handleVote} handleDeletePost={handleDeletePost} details/>
        <CommentList
          date={normalizedDate}
          comments={comments}
          handleVote={handleVote}
          handleDelete={this.onDeleteComment} />
      </div>
    );
  }
}

export default connect(state => {
  return {
    activepost: state.app.activepost,
    comments: state.app.comments
  };
}, { fetchPost, fecthComments, deleteComment })(PostDetails);
