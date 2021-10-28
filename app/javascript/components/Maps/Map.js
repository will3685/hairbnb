import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: window.innerWidth,
    height: window.innerHeight,
    zoom: 10
  })
  return (
    <div>
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      markers here
    </ReactMapGL>
  </div>
  )
}

export default Map