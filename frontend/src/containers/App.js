//Libs
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//Helpers
import * as API from '../API';
//Containers
import PostDetails from '../containers/PostDetails';
import Main from '../containers/Main';
//Components
import Header from '../components/Header';
import AddPost from '../components/AddPost';
//Actions
import { updateVoteScore } from  '../actions';

class App extends Component {
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

  render() {
    const { history, location } = this.props;
    return (
      <div className="app">
        <Header title="Post" history={history} location={location} />
        <Route exact path="/" render={(props) => (
          <Main {...props} handleVote={this.handleVote} />
        )}/>
        <Route exact path="/:category" render={(props) => (
          <Main {...props} handleVote={this.handleVote} />
        )}/>
        <Route path="/add_post/form/add" component={AddPost} />
        <Route exact path="/:category/:post" render={(props) => (
          <PostDetails {...props} handleVote={this.handleVote} />
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
}, { updateVoteScore })(App);

export default withRouter(App);
