import React from 'react';
import { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';
import MapMarker from '@components/icons/MapMarker.svg';

const MarkerComp = ({ point, isFoucsedFn, handelClick }) => {
  const isFoucsed = isFoucsedFn ? isFoucsedFn() : false;
  return (
    <Marker
      key={point.id}
      longitude={point.location.longitude}
      latitude={point.location.latitude}
      onClick={() => handelClick(point)}
    >
      <MapMarker className={`marker ${isFoucsed ? 'marker--isFoucsed' : ''}`} />
    </Marker>
  )
}

MarkerComp.propTypes = {
  point: PropTypes.object,
  isFoucsedFn: PropTypes.func,
  handelClick: PropTypes.func,
}

export default MarkerComp;
