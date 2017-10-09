
const api = 'http://localhost:3001';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'look-shinji'
};

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

export const getCategoryPost = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json());

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json());

export const getPost = (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json());

export const updateVoteScore = (id, vote) =>{
  return fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option: vote === 1 ? 'upVote' : 'downVote' })
  }).then(res => res.json());
};
