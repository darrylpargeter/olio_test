import React from 'react';
import PropTypes from 'prop-types';
import Eye from '@components/icons/Eye.svg';
import EyeOff from '@components/icons/EyeOff.svg';

const Articles = ({
  article,
  handleClick,
  seen,
  toggleSeen,
  handleMouseOver,
}) => {
  const firstImg = article.images[0];
  const isSeen = seen?.[article.id] ?? false;

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

      <div className="article-actions">
        {isSeen ? <EyeOff className="article-actions-viewed" onClick={handleSeenClick} /> : <Eye  onClick={handleSeenClick} />}
      </div>

      <div className="article-description">
        <p >
          {article.description}
        </p>
      </div>

      <div className="article-views">
        <p><span className="article-view-total">{article.reactions.views}</span> views</p>
      </div>

      <div className="article-price">
        {article.value.price === 0 ? 'Free' : `£${article.value.price}`}
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
