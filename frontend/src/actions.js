export const FETCH_CATEGORY = 'fetch_categories';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const FETCH_COMMENTS = 'fetch_comments';
export const FETCH_CATEGORY_POSTS = 'fetch_caregory_posts';
export const UPDATE_VOTE_SCORE = 'update_vote_score';
export const SORT_POSTS = 'sort_posts';
export const UPDATE_POSTS = 'update_posts';
export const DELETE_POST = 'delete_posts';
export const UPDATE_COMMENTS = 'update_comments';
export const DELETE_COMMENT = 'delete_comment';

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

export function updateVoteScore(id, type, voteScore) {
  return {
    type: UPDATE_VOTE_SCORE,
    payload: {
      id,
      type,
      voteScore,
    }
  };
};

export function updateComments(comment){
  return {
    type: UPDATE_COMMENTS,
    payload: comment
  };
}

export function deleteComment(commentId){
  return {
    type: DELETE_COMMENT,
    payload: commentId
  };
}

export function updatePosts(post){
  return {
    type: UPDATE_POSTS,
    payload: post
  };
}

export function deletePost(postId){
  return {
    type: DELETE_POST,
    payload: postId
  };
}

export function sortPosts(sortBy) {
  return {
    type: SORT_POSTS,
    payload: sortBy
  };
};
