import React from 'react';
import { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';

const MarkerComp = ({ point, handelClick }) => {
  return (
    <Marker key={point.id} longitude={point.location.longitude} latitude={point.location.latitude} onClick={() => handelClick(point)}>
      <svg className="marker">
        <circle cx={5} cy={5} r={4} fill="blue" />;
      </svg>
    </Marker>
  )
}

MarkerComp.propTypes = {
  point: PropTypes.object,
  handelClick: PropTypes.func,
}

export default MarkerComp;
