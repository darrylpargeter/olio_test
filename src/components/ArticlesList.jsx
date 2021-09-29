import React from 'react';
import PropTypes from 'prop-types';
import Articles from '@components/Articles';

const ArticlesList = ({ articles, articleProps }) => {
  return (
    <ul className="article-list">
      {articles.map((article) => (
        <Articles article={article} {...articleProps} key={`article-${article.id}`} />
      ))}
    </ul>
  );
}

ArticlesList.propTypes = {
  articles: PropTypes.array,
  articleProps: PropTypes.object,
}

export default ArticlesList;
