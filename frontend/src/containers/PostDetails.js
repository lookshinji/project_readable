//Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Helpers & API
import * as API from '../API';
import { normalizedDate } from '../helpers';
//Containers
import CommentList from './CommentList';
//Components
import Post from '../components/Post';
//Actions
import { fetchPost, fecthComments, deleteComment } from  '../actions';

class PostDetails extends Component {

  componentDidMount(){
    const { post } = this.props.match.params;
    const { fetchPost, fecthComments } = this.props;

    API.getPost(post)
      .then((response) => {
        fetchPost(response);
      });

    API.getComments(post)
      .then((response) => {
        fecthComments(response);
      });
  };

  onDeleteComment = (commentId) => {
    const { deleteComment } = this.props;
    API.deleteComment(commentId)
      .then((response) => {
        deleteComment(commentId);
      });
  };

  render() {
    const { activepost, comments, handleVote, handleDeletePost } = this.props;
    return (
      <div className="post-details container">
        <Post
          date={normalizedDate}
          post={activepost}
          handleVote={handleVote}
          handleDeletePost={handleDeletePost}
          comments={comments}
          details/>
        <CommentList
          date={normalizedDate}
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
