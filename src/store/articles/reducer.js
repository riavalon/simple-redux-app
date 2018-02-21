import {FETCH_ARTICLES_SUCCEEDED, FETCH_ARTICLES_FAILED} from './constants';


export const articleState = [];

export const articlesReducer = (state = articleState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCEEDED:
      console.log('FETCH SUCCEEDED', action.payload);
      return action.payload;

    case FETCH_ARTICLES_FAILED:
      console.error(action.payload);
      return articleState;

    default:
      return state;
  }
};
