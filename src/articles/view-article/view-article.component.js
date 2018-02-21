import React from 'react';


export const ViewArticle = ({article, comments}) => {
  const commentsList = comments.map((comment, idx) => (
    <li className="w-35 mv4 mh3 pa3 ba" key={idx}>
      <strong>Commenter: {comment.commenterName}</strong>
      <p>{comment.comment}</p>
    </li>
  ));

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>

      <h2>Comments</h2>
      <ul className="list flex flex-wrap items-center justify-start w-70">
        {commentsList}
      </ul>
    </div>
  );
}
