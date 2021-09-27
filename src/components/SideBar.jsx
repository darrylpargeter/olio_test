import React from 'react';
import PropTypes from 'prop-types';
import { StaticMap, Marker } from 'react-map-gl';
import MarkerComp from '@components/Marker';
import CloseIcon from '@components/icons/CloseIcon.svg';

const SideBar = ({ isOpen, article, closeSidebar }) => {
  return article?.location ? (
    <div className={`sidebar ${isOpen ? 'sidebar--isOpen' : '' }`}>
      <div className="sidebar__title">
        <h1>{article.title}</h1>
        <CloseIcon className="sidebar__closeBtn" onClick={closeSidebar} />
      </div>
      <div className="sidebar__map">
        <StaticMap
          width="100%"
          height="100%"
          latitude={article.location.latitude}
          longitude={article.location.longitude}
          mapboxApiAccessToken="pk.eyJ1IjoiZGFycnlscGFyZ2V0ZXIiLCJhIjoiY2t1MXJkYnRrMDhibDMxbzY3Ymk0ZGlteSJ9.5BGnBSZ2DYMpVztTumAghg"
          zoom={18}
        >
          <MarkerComp point={article} /> 
        </StaticMap>
      </div>
      <div className="sidebar__body">
        <h2>body</h2>
      </div>
    </div>
  ) : null;
};

SideBar.propTypes = {
  isOpen: PropTypes.bool,
  article: PropTypes.object
}

export default SideBar;
