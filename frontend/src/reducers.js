import {
  FETCH_CATEGORY,
  FETCH_POSTS,
  FETCH_CATEGORY_POSTS,
  UPDATE_VOTE_SCORE,
  FETCH_POST,
} from './actions.js';

function appReducer (state = {
  categories: [],
  posts: [],
  activepost:{},
}, action) {
  switch (action.type) {
  case FETCH_CATEGORY:
    return {
      ...state,
      categories: action.payload,
    };
  case FETCH_POSTS:
    return {
      ...state,
      posts: action.payload,
    };
  case FETCH_POST:
    return {
      ...state,
      activepost: action.payload,
    };
  case FETCH_CATEGORY_POSTS:
    return {
      ...state,
      posts: action.payload,
    };
  case UPDATE_VOTE_SCORE:
    return {
      ...state,
      posts: state.posts.map((post) => {
        if(post.id !== action.payload.id) {
          return post;
        }
        return {
          ...post,
          voteScore: action.payload.voteScore
        };
      }),
    };
  default:
    return state;
  }
}

export default appReducer;
