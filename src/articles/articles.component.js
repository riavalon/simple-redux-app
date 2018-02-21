import React from 'react';

import {ArticleList} from '../components/article-list/article-list.component';


export const ArticlesComponent = ({articles, fetchArticles}) => {
  return (
    <div>
      <h1>Some really hip blog</h1>

      <h3>Check out all the articles!</h3>

      <button onClick={fetchArticles}>
        fetch articles
      </button>

      <section>
        <ArticleList articles={articles} />
      </section>
    </div>
  );
}
