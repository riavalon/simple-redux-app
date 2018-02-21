import {FETCH_COMMENTS_SUCCEEDED, FETCH_COMMENTS_FAILED, RESET_COMMENTS} from './constants';


const API_URL = 'http://localhost:5000/comments';


export const fetchCommentsSucceeded = comments => ({
  type: FETCH_COMMENTS_SUCCEEDED,
  payload: comments,
});


export const fetchCommentsFailed = err => ({
  type: FETCH_COMMENTS_FAILED,
  payload: err,
});


export const resetComments = err => ({
  type: RESET_COMMENTS,
});


export const fetchCommentsForArticles = (articleId) => dispatch => fetch(`${API_URL}?articleId=${articleId}`)
  .then(res => res.json())
  .then(comments => dispatch(fetchCommentsSucceeded(comments)))
  .catch(err => dispatch(fetchCommentsFailed(err)));
