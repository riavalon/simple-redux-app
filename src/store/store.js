import {combineReducers} from 'redux';

import {articlesReducer, articleState} from './articles/reducer';
import {commentsReducer, commentState} from './comments/reducer';
import {filterReducer, filterState} from './filters/reducer';


export const initialState = {
  articles: articleState,
  comments: commentState,
  filters: filterState,
};


const allReducers = {
  articles: articlesReducer,
  comments: commentsReducer,
  filters: filterReducer,
};


export const reducers = combineReducers(allReducers);
