//Libs
import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
//Helpers
import * as API from '../API';
//Components
import PostList from '../components/PostList';
//Style
import { Row, Col } from 'elemental';
//Actions
import {
  fetchCategories,
  fetchCategoryPosts,
  fetchPosts,
  updateVoteScore,
  sortPosts } from  '../actions';

class Main extends Component {
  componentDidMount(){
    const { fetchCategories, fetchPosts, fetchCategoryPosts } = this.props;
    const { category } = this.props.match.params;

    API.getCategories()
      .then((categories) => {
        fetchCategories(categories);
      });

    if (category === undefined ) {
      let postsWithComments = [];
      API.getAllPosts()
        .then((posts) => {
          posts.map((post, idx) => {
            API.getComments(post.id)
              .then(comments => {
                postsWithComments.push({...post, comments: comments.length});
                (idx === posts.length - 1) && fetchPosts(postsWithComments);
              });
          });
        });
    } else {
      let postsWithComments = [];
      API.getCategoryPost(category)
        .then((categoryPosts) => {
          categoryPosts.map((post, idx) => {
            API.getComments(post.id)
              .then(comments =>{
                postsWithComments.push({...post, comments: comments.length});
                (idx === categoryPosts.length -1) && fetchCategoryPosts(postsWithComments);
              });
          });
        });
    }
  }

  componentDidUpdate(prevProps, prevState){
    const { category } = this.props.match.params;
    const { fetchCategoryPosts } = this.props;
    if (category === undefined ) {
      let postsWithComments = [];
      API.getAllPosts()
        .then((posts) => {
          posts.map((post, idx) => {
            API.getComments(post.id)
              .then(comments => {
                postsWithComments.push({...post, comments: comments.length});
                (idx === posts.length - 1) && fetchPosts(postsWithComments);
              });
          });
        });
    } else {
      let postsWithComments = [];
      API.getCategoryPost(category)
        .then((categoryPosts) => {
          categoryPosts.map((post, idx) => {
            API.getComments(post.id)
              .then(comments =>{
                postsWithComments.push({...post, comments: comments.length});
                (idx === categoryPosts.length -1) && fetchCategoryPosts(postsWithComments);
              });
          });
        });
    }
  }

  render() {
    const { categories, posts, match, sortPosts, handleVote, handleDeletePost} = this.props;
    const categoryName = match.params.category;
    return (
      <div className="container">
        <Row className="main">
          <Col xs='70%'>
            <div className="main--title">
              <h4>{ categoryName ? `Category: ${categoryName.replace(/[^A-Z0-9]+/ig, ' ')}` : 'All Posts'}</h4>
              <ul>
                <li><h5>sort by:</h5></li>
                <li><Link to="#" onClick={()=>sortPosts('BY_DATE')}>date</Link></li>
                <li><Link to="#" onClick={()=>sortPosts('BY_VOTE')}>vote</Link></li>
              </ul>
            </div>
            <ul className="main-posts">
              <PostList posts={posts} handleVote={handleVote} handleDeletePost={handleDeletePost} />
            </ul>
          </Col>
          <Col xs='30%'>
            <div className="main--title">
              <h4>Categories</h4>
            </div>
            <ol className='main_categories'>
              {categories.map((category) => (
                <li key={category.name}><NavLink activeClassName="main_categories--selected" to={`/${category.path}`}>{category.name}</NavLink></li>
              ))}
            </ol>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(state => {
  return {
    categories: state.app.categories,
    posts: state.app.posts
  };
}, { fetchCategories, fetchCategoryPosts, fetchPosts, updateVoteScore, sortPosts })(Main);
