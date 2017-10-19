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
      API.getAllPosts()
        .then((posts) => {
          fetchPosts(posts);
        });
    } else {
      API.getCategoryPost(category)
        .then((categoryPosts) => {
          fetchCategoryPosts(categoryPosts);
        });
    }
  }

  componentDidUpdate(prevProps, prevState){
    const { category } = this.props.match.params;
    const { fetchCategoryPosts } = this.props;
    if (prevProps.match.params.category !== category) {
      if (category === undefined ) {
        API.getAllPosts()
          .then((posts) => {
            fetchPosts(posts);
          });
      } else {
        API.getCategoryPost(category)
          .then((categoryPosts) => {
            fetchCategoryPosts(categoryPosts);
          });
      }
    }
  }

  render() {
    const { categories, posts, match, sortPosts, handleVote} = this.props;
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
              <PostList posts={posts} handleVote={handleVote} />
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
