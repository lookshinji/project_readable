export const FETCH_CATEGORY = 'fetch_categories';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const FETCH_COMMENTS = 'fetch_comments';
export const FETCH_CATEGORY_POSTS = 'fetch_caregory_posts';
export const UPDATE_VOTE_SCORE = 'update_vote_score';

export function fetchCategories(categories) {
  return {
    type: FETCH_CATEGORY,
    payload: categories
  };
};

export function fetchPosts(posts) {
  return {
    type: FETCH_POSTS,
    payload: posts
  };
};

export function fetchPost(activepost) {
  return {
    type: FETCH_POST,
    payload: activepost
  };
};

export function fecthComments(comments) {
  return {
    type: FETCH_COMMENTS,
    payload: comments
  };
};

export function fetchCategoryPosts(categoryPosts) {
  return {
    type: FETCH_CATEGORY_POSTS,
    payload: categoryPosts
  };
};

export function updateVoteScore(id, voteScore) {
  return {
    type: UPDATE_VOTE_SCORE,
    payload: {
      id,
      voteScore,
    }
  };
};
