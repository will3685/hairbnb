import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const Salons = () => {
  const [ salons, setSalons ] = useState([])

  useEffect(() => {
    //Get all salons from the database
    //update airline in our state
    axios.get('/api/v1/salons.json')
      .then( res => {
        setSalons(res.data.data)
      } )
      .catch( res => console.log(res) )
  }, [salons.length])

  const list = salons.map( item => {
    return (<li key={item.attributes.id}>{item.attributes.name}</li>)
  })

  return (
    <div className="home">
      <div className="header">
        <h1>Choose your appointment</h1>
      </div>
      <div className="grid">
        {list}
      </div>
    </div>
  )
}

export default Salons