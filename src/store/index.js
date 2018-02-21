import thunk from 'redux-thunk';
import logger from 'redux-logger'
import {compose, createStore, applyMiddleware} from 'redux';
import persistState from 'redux-localstorage';

import {initialState, reducers} from './store';


const enhancers = compose(
  applyMiddleware(thunk, logger),
  persistState(),
);


export const store = createStore(
  reducers,
  initialState,
  enhancers
);
