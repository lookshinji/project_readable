//Libs
import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//Helpers
import * as API from '../API';
//Containers
import PostDetails from '../containers/PostDetails';
import Main from '../containers/Main';
import PostForm from '../containers/PostForm';

//Components
import Header from '../components/Header';
//Actions
import { updateVoteScore, fetchCategories, deletePost } from  '../actions';

class App extends Component {

  componentDidMount() {
    const { fetchCategories } = this.props;
    API.getCategories()
      .then((categories) => {
        fetchCategories(categories);
      });
  }

  handleVote = (id, type, vote) => {
    const { updateVoteScore } = this.props;
    let apiType = '';
    switch (type) {
    case 'posts':
    case 'activepost':
      apiType = 'posts';
      break;
    case 'comments':
      apiType = 'comments';
      break;
    default:
      return console.log('apiType required');
    }
    API.updateVoteScore(id, apiType, vote)
      .then((post) => {
        updateVoteScore(id, type, post.voteScore);
      });
  }

  onDeletePost = (postId) => {
    const { deletePost } = this.props;
    API.deletePost(postId);
    deletePost(postId);
  }

  render() {
    const { history, location } = this.props;
    return (
      <div className="app">
        <Header title="Post" history={history} location={location} />
        <Route exact path="/" render={(props) => (
          <Main {...props} handleVote={this.handleVote} handleDeletePost={this.onDeletePost} />
        )}/>
        <Switch>
          <Route path="/add_post" component={PostForm} history={history} />
          <Route exact path="/:category" render={(props) => (
            <Main {...props} handleVote={this.handleVote} handleDeletePost={this.onDeletePost} />
          )}/>
        </Switch>
        <Route path="/:category/:post" render={(props) => (
          <PostDetails {...props} handleVote={this.handleVote} handleDeletePost={this.onDeletePost} />
        )}/>
      </div>
    );
  }
}

App = connect(state => {
  return {
    categories: state.app.categories,
    posts: state.app.posts
  };
}, { updateVoteScore, fetchCategories, deletePost })(App);

export default withRouter(App);
