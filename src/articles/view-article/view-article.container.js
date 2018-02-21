import {connect} from 'react-redux';

import {fetchCommentsForArticles, resetComments} from '../../store/comments/actions';
import {ViewArticle} from './view-article.component';

let hasFetchedComments = false;


const mapStateToProps = (state, {match: { params }}) => ({
  article: state.articles.find(item => item.id === parseInt(params.id, 10)),
  comments: state.comments,
})

const mapDispatchToProps = dispatch => ({
  fetchComments: id => dispatch(fetchCommentsForArticles(id)),
  resetComments: () => dispatch(resetComments()),
});

const mergeProps = (stateProps, dispatchProps) => {
  // talk about redux sage because yeah
  if (stateProps.article) {
    if (stateProps.comments.length && stateProps.article.id !== stateProps.comments[0].articleId) {
      dispatchProps.resetComments();
      hasFetchedComments = false;
    } else if (stateProps.comments.length === 0 && !hasFetchedComments) {
      dispatchProps.fetchComments(stateProps.article.id);
      hasFetchedComments = true;
    }
  }

  return Object.assign({}, stateProps, dispatchProps);
};


export const ViewArticleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ViewArticle);
