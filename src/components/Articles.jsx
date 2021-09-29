import React from 'react';
import PropTypes from 'prop-types';
import Eye from '@components/icons/Eye.svg';
import EyeOff from '@components/icons/EyeOff.svg';

const Articles = ({
  article,
  handleClick,
  isSeen,
  toggleSeen,
  handleMouseOver,
}) => {
  const firstImg = article.images[0];

  const onClick = () => {
    handleClick(article);
  }

  const handleSeenClick = (e) => {
    e.stopPropagation();
    toggleSeen(article);
  }

  const onMouseOver = () => {
    handleMouseOver(article);
  }

  return (
    <li
      className={`article ${isSeen ? 'article--seen' : ''}`}
      key={article.id}
      onClick={onClick}
      onMouseOver={onMouseOver}
    >
      <img className="article-img" src={firstImg.files.medium} alt={article.title} />
      <h2 className="article-title">{article.title}</h2>
      <p className="article-description">
        {article.description}
      </p>
      <div className="article-views">
        <p>{article.reactions.views} views</p>
      </div>
      <div className="article-actions">
        {isSeen ? <EyeOff onClick={handleSeenClick} /> : <Eye onClick={handleSeenClick} />}
      </div>
    </li>
  );
}

Articles.propTypes = {
  article: PropTypes.object,
  handelClick: PropTypes.func,
  isSeen: PropTypes.bool,
  toggleSeen: PropTypes.func,
}

export default Articles;
