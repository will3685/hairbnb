import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    heigth: "100vh",
    zoom: 10
  })
  return (
      <ReactMapGL 
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
          Makers here
      </ReactMapGL>
  )
}

export default Map