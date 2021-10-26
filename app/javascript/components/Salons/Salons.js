import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Salon from "./Salon";

import styled from "styled-components";

const ColumnSecond = styled.div`
  background: #fff;
  height: 100vh;
  overflow: none;
`
const ColumnFirst = styled.div`
  overflow: none;
`

const Home = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
    <Fragment>
      <Home>
        <ColumnFirst>
          <Header>
            <h1>Choose your appointment</h1>
          </Header>
          <Grid>
            {grid}
          </Grid>  
        </ColumnFirst>
        <ColumnSecond>
          <div>
            The map will be rendered here.
          </div>
        </ColumnSecond>
      </Home>
    </Fragment>
  )
}

export default Salons