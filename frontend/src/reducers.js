import { CREATE_CATEGORY } from './actions.js';

function appReducer (state = {
  categories: [],
  posts: []
}, action) {
  switch (action.type) {
  case CREATE_CATEGORY:
    console.log(action.payload);
    return {
      ...state,
      categories: action.payload,
    };
  default:
    return state;
  }
}

export default appReducer;
