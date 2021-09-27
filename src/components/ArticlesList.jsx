import React from 'react';
import PropTypes from 'prop-types';
import Articles from '@components/Articles';

const ArticlesList = ({ articles, handleClick, seen, toggleSeen }) => {
  return (
    <ul className="article-list">
      {articles.map((article) => (
        <Articles 
          article={article}
          handleClick={handleClick}
          isSeen={seen?.[article.id]}
          toggleSeen={toggleSeen}
          key={article.id}
        />
      ))}
    </ul>
  );
}

ArticlesList.propTypes = {
  articles: PropTypes.array,
  handleClick: PropTypes.func,
  seen: PropTypes.object,
  toggleSeen: PropTypes.func,
}

export default ArticlesList;
