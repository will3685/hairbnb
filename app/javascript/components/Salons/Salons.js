import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

import Salon from "./Salon";

import {Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Map from "../Maps/Map";


const Home = styled.div`
  overflow: hidden;
`
const Header = styled.div`
  padding: 20px 0 0 20px;

  h1 {
    font-size: 42px;
  }
`
const Grid = styled.div`
  padding: 20px 10px 20px 20px;
`


const Salons = () => {
  const [ salons, setSalons ] = useState([])

  useEffect(() => {
    //Get all salons from the database
    //update salon in our state
    axios.get('/api/v1/salons.json')
      .then( res => {
        setSalons(res.data.data)
      } )
      .catch( res => console.log(res) )
  }, [salons.length])

  const grid = salons.map( item => {
    return (
    <Salon
      key={item.id}
      attributes={item.attributes}
      />
    )
  })


  return (
    <Home>
      <Row>
        <Col xs={7} >
          <Header>
            <h1>Check your appointment</h1>
          </Header>
          <Grid>
            {grid}
          </Grid>  
        </Col>
        <Col xs={5}>
         <Map />
        </Col>
      </Row> 
    </Home>
  )
}

export default Salons