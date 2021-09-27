import React from 'react';
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl';
import MarkerComp from '@components/Marker';
import PropTypes from 'prop-types';

const Map = ({ points, zoomTo, openSideBar }) => {
  const [viewport, setViewport] = React.useState({
    longitude: -3.18,
    latitude: 51.48,
    zoom: 8
  });

  React.useEffect(() => {
    if (zoomTo?.location) {
      setViewport({
        ...viewport,
        longitude: zoomTo.location.longitude,
        latitude: zoomTo.location.latitude,
        zoom: 18,
        transitionDuration: 5000,
        transitionInterpolator: new FlyToInterpolator(),
      });
    }
  }, [zoomTo]);

  const handelClick = (point) => {
    openSideBar(point);
  }

  const markers = React.useMemo(() => points.map(point => (
    <MarkerComp point={point} handelClick={handelClick} key={`marker-${point.id}`} />
  )), [points]);

  return (
    <ReactMapGL 
      mapboxApiAccessToken="pk.eyJ1IjoiZGFycnlscGFyZ2V0ZXIiLCJhIjoiY2t1MXJkYnRrMDhibDMxbzY3Ymk0ZGlteSJ9.5BGnBSZ2DYMpVztTumAghg"
      width="100%"
      height="100%"
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {markers}
    </ ReactMapGL>
  );
}

Map.propTypes = {
  points: PropTypes.array,
  zoomTo: PropTypes.object,
  openSideBar: PropTypes.func,
}

export default Map;
