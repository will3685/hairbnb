import React, {useState, useEffect} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';

import axios from "axios";
// import SalonMarker from './Marker';

const Map = () => {

  const [viewport, setViewport] = useState({
    latitude: 48.8582,
    longitude: 2.2945,
    width: window.innerWidth,
    height: window.innerHeight,
    zoom: 10
  })

  const [ salons, setSalons ] = useState([])

  useEffect(() => {
    //Get all salons from the database
    //update salon in our state
    axios.get('/api/v1/salons.json')
      .then( res => {
        setSalons(res.data.data)
      } )
      .catch( res => console.log(res) )

    const listener = e => {
      if (e.key === "Escape") {
        setSelectedSalon(null);
      }
    }
    window.addEventListener("keydown", listener)

    return () => {
      window.removeEventListener("keydown", listener)
    }
  }, [salons.length])

  const [selectedSalon, setSelectedSalon] = useState(null)

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.MAPBOX_API_KEY}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {
          salons.map(salon => (
            <Marker
              key={salon.id}
              latitude={salon.attributes.latitude}
              longitude={salon.attributes.longitude}
            >
              <button className="marker-btn" onClick={(e) =>{
                e.preventDefault();
                setSelectedSalon(salon)
              }}>SALON</button>
            </Marker>
          )
          )
        }

        {
          selectedSalon ? (
            <Popup 
            latitude={selectedSalon.attributes.latitude} 
            longitude={selectedSalon.attributes.longitude}
            onClose={() => {
              setSelectedSalon(null)
            }}
            >
              <h1>{selectedSalon.attributes.name}</h1>
              <p>{selectedSalon.attributes.description}</p>
            </Popup>
          ) : null
        }
      </ReactMapGL>
  </div>
  )
}

export default Map