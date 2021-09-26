import React from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 51.48,
    longitude: -3.18,
    zoom: 13
  });

  return (
    <div className="map">
      <ReactMapGL 
        mapboxApiAccessToken="pk.eyJ1IjoiZGFycnlscGFyZ2V0ZXIiLCJhIjoiY2t1MXJkYnRrMDhibDMxbzY3Ymk0ZGlteSJ9.5BGnBSZ2DYMpVztTumAghg"
        width="100%"
        height="100%"
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
      />
    </div>
  );
}

export default Map;
