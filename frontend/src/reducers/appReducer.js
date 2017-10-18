import {
  FETCH_CATEGORY,
  FETCH_POSTS,
  FETCH_CATEGORY_POSTS,
  UPDATE_VOTE_SCORE,
  FETCH_POST,
  FETCH_COMMENTS,
  SORT_POSTS,
} from '../actions.js';

function appReducer (state = {
  categories: [],
  posts: [],
  activepost:{},
  comments: [],
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
      posts:
        action.payload.sort((a, b) => {
          return b.timestamp - a.timestamp;
        })
    };
  case FETCH_POST:
    return {
      ...state,
      activepost: action.payload,
    };
  case FETCH_COMMENTS:
    return {
      ...state,
      comments: action.payload,
    };
  case FETCH_CATEGORY_POSTS:
    return {
      ...state,
      posts: action.payload,
    };
  case UPDATE_VOTE_SCORE:
    console.log(action.payload.type);
    switch (action.payload.type) {
    case 'posts':
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
    case 'comments':
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if(comment.id !== action.payload.id) {
            return comment;
          }
          return {
            ...comment,
            voteScore: action.payload.voteScore
          };
        }),
      };
    default:
      return console.log('type required');
    }
  case SORT_POSTS:
    switch (action.payload) {
    case 'BY_VOTE':
      return {
        ...state,
        posts:
          state.posts.sort((a, b) => {
            return b.voteScore - a.voteScore;
          })
      };
    default:
      return {
        ...state,
        posts:
          state.posts.sort((a, b) => {
            return b.timestamp - a.timestamp;
          })
      };
    }
  default:
    return state;
  }

}

export default appReducer;