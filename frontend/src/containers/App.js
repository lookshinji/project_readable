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

    API.updateVoteScore(id, type, vote)
      .then((post) => {
        console.log(post);
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
        <Route exact path="/add_post/form" component={AddPost} />
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
