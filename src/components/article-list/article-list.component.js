import React from 'react';
import {Link} from 'react-router-dom';


export const ArticleList = ({articles}) => {
  const elements = articles.map((article, idx) => (
    <div className="article" key={idx}>
      <h4>{article.title}</h4>
      <Link to={`/article/${article.id}`}>
        view details
      </Link>
    </div>
  ));

  return (
    <section>
      {elements}
    </section>
  )
};
