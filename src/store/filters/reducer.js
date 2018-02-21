import {UPDATE_FIELD, RESET_FILTERS} from './constants.js';


export const filterState = {
  articleId: '',
  showComments: false,
};


export const filterReducer = (state = filterState, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return Object.assign({}, state, {
        [action.payload.fieldName]: action.payload.fieldVal
      });

    case RESET_FILTERS:
      return filterState;

    default:
      return state;
  }
};
