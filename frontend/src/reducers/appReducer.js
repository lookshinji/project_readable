import {
  FETCH_CATEGORY,
  FETCH_POSTS,
  FETCH_CATEGORY_POSTS,
  UPDATE_VOTE_SCORE,
  FETCH_POST,
  FETCH_COMMENTS,
  SORT_POSTS,
  UPDATE_COMMENTS,
  EDIT_COMMENT,
  DELETE_COMMENT,
  UPDATE_POSTS,
  DELETE_POST,
  EDIT_POST,
  SAVE_POST,
} from '../actions.js';

function appReducer (state = {
  categories: [],
  posts: [],
  activepost:{},
  comments: [],
  postId: '',
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

  case DELETE_POST:
    return {
      ...state,
      posts: state.posts.filter(post => {
        return post.id !== action.payload;
      }),
    };

  case SAVE_POST:
    return {
      ...state,
      postId: action.payload,
    };

  case EDIT_POST:
    console.log(action.payload);
    return {
      ...state,
      posts: state.comments.map((post) => {
        if(post.id !== action.payload.id) {
          return post;
        }
        return {
          ...post,
          title: action.payload.title,
          body: action.payload.body
        };
      }),
    };

  case UPDATE_POSTS:
    return {
      ...state,
      posts: [...state.posts, action.payload]
    };

  case DELETE_COMMENT:
    return {
      ...state,
      comments: state.comments.filter(comment => {
        return comment.id !== action.payload;
      }),
    };

  case EDIT_COMMENT:
    return {
      ...state,
      comments: state.comments.map((comment) => {
        if(comment.id !== action.payload.id) {
          return comment;
        }
        return {
          ...comment,
          body: action.payload.body
        };
      }),
    };

  case UPDATE_COMMENTS:
    return {
      ...state,
      comments: [...state.comments, action.payload]
    };

  case UPDATE_VOTE_SCORE:
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
    case 'activepost':
      return {
        ...state,
        activepost: {
          ...state.activepost,
          voteScore: action.payload.voteScore
        }
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
