import {RESET_COMMENTS, FETCH_COMMENTS_SUCCEEDED, FETCH_COMMENTS_FAILED} from './constants';


export const commentState = [];


export const commentsReducer = (state = commentState, action) => {
  switch (action.type) {

    case FETCH_COMMENTS_SUCCEEDED:
      return action.payload

    case FETCH_COMMENTS_FAILED:
      console.error(action.payload);
      return commentState;

    case RESET_COMMENTS:
      return commentState;

    default:
      return state;
  }
}
