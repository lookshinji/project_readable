import { generateUUID } from './helpers.js';

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

export const getComments = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json());

export const updateVoteScore = (id, type, vote) =>{
  return fetch(`${api}/${type}/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option: vote === 1 ? 'upVote' : 'downVote' })
  }).then(res => res.json());
};

export const addPost = (values) => {
  return fetch(`${api}/posts`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      id: generateUUID(),
      timestamp: Date.now(),
      title: values.postTitle,
      body: values.postMessage,
      author: values.postAuthor,
      category: values.postCategory,
    })
  }).then(res => res.json());
};

export const editPost = (postId, values) => {
  return fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      title: values.postTitle,
      body: values.postMessage,
    })
  }).then(res => res.json());
};

export const deletePost = (postId) => {
  return fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers,
  }).then(res => res.json());
};


export const addComment = (postID, values) => {
  return fetch(`${api}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      id: generateUUID(),
      timestamp: Date.now(),
      body: values.commentMessage,
      author: values.commentAuthor,
      parentId: postID,
    })
  }).then(res => res.json());
};

export const editComment = (commentId, values) => {
  return fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      timestamp: Date.now(),
      body: values.commentMessage,
    })
  }).then(res => res.json());
};

export const deleteComment = (commentId) => {
  return fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers,
  }).then(res => res.json());
};
