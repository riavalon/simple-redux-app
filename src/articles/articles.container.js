import {connect} from 'react-redux';

import {ArticlesComponent} from './articles.component';
import {fetchArticles} from '../store/articles/actions';


const mapStateToProps = state => ({
  articles: state.articles,
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles()),
});

export const Articles = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticlesComponent);
