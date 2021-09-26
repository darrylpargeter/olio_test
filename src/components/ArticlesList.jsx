import React from 'react';
import PropTypes from 'prop-types';
import Articles from '@components/Articles';

const ArticlesList = ({ articles }) => {
  return (
    <ul className="article-list">
      {articles.map((article) => <Articles article={article} key={article.id} />)}
    </ul>
  );
}

ArticlesList.propTypes = {
  articles: PropTypes.array,
}

export default ArticlesList;
