import React from 'react';

const Articles = ({ article }) => {
  const firstImg = article.images[0];

  return (
    <li className="article" key={article.id}>
      <img className="article-img" src={firstImg.files.medium} alt={article.title} />
      <h2 className="article-title">{article.title}</h2>
      <p className="article-description">
        {article.description}
      </p>
      <div className="article-views">
        <p>views: {article.reactions.views}</p>
      </div>
      <div className="article-actions">
        <p>actions</p>
      </div>
    </li>
  );
}

export default Articles;
