import React from 'react';
import PropTypes from 'prop-types';
import { StaticMap } from 'react-map-gl';
import MarkerComp from '@components/Marker';
import CloseIcon from '@components/icons/CloseIcon.svg';
import DetailsCard from '@components/DetailsCard';
import format from 'date-fns/format'

const SideBar = ({ isOpen, article, closeSidebar }) => {
  if (!Object.keys(article).length) return null;

  const createdDate = format(new Date(article.created_at), 'dd/MM/yyyy');
  const img = article.images[0]

  return article?.location ? (
    <div className={`sidebar ${isOpen ? 'sidebar--isOpen' : '' }`}>
      <div className="sidebar__title">
        <h1>{article.title}</h1>
        <CloseIcon className="sidebar__closeBtn" onClick={closeSidebar} />
      </div>
      <div className="sidebar__img">
        <img src={img.files.medium} alt={article.title}/>
      </div>
      <div className="sidebar__map">
        <p>Approx. Location</p>
        <StaticMap
          width="100%"
          height="100%"
          latitude={article.location.latitude}
          longitude={article.location.longitude}
          mapboxApiAccessToken="pk.eyJ1IjoiZGFycnlscGFyZ2V0ZXIiLCJhIjoiY2t1MXJkYnRrMDhibDMxbzY3Ymk0ZGlteSJ9.5BGnBSZ2DYMpVztTumAghg"
          zoom={18}
        >
          <MarkerComp point={article} isFoucsed /> 
        </StaticMap>
      </div>
      <div className="sidebar__body">
        <div className="sidebar__reactions">
          <div className="sidebar__body-title">
            <h3 className="sidebar__posted-by">Posted by {article.user.first_name} on {createdDate}</h3>
            <div className="sidebar__reactions-list">
              <span>
                {article.reactions.impressions} Impression 
              </span>
              <span>.</span>
              <span>
                {article.reactions.likes} Likes 
              </span>
              <span>.</span>
              <span>
                {article.reactions.views} Views 
              </span>
            </div>
            <img
              src={article.user.current_avatar.small}
              alt={`profile image of ${article.user.first_name}`}
              className="sidebar__profile-img"
            />
          </div>
          <p className="sidebar__description">
            {article.description}
          </p>
        </div>
        <div className="sidebar__details">
          <DetailsCard item={article} />
        </div>
      </div>
    </div>
  ) : null;
};

SideBar.propTypes = {
  isOpen: PropTypes.bool,
  article: PropTypes.object,
  closeSidebar: PropTypes.func,
}

export default SideBar;
