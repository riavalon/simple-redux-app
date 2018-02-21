const API_URL = 'http://localhost:5000/articles';

export const fetchArticlesSucceeded = (articles) => ({
  type: 'FETCH_ARTICLES_SUCCEEDED',
  payload: articles,
});

export const fetchArticlesFailed = (err) => ({
  type: 'FETCH_ARTICLES_FAILED',
  payload: err,
});

export const fetchArticles = () => dispatch => fetch(API_URL)
  .then(res => res.json())
  .then(articles => dispatch(fetchArticlesSucceeded(articles)))
  .catch(res => dispatch(fetchArticlesFailed(res.json())));
