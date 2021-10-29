import React, { useState, useEffect } from "react";
import BookCategory from './BookCategory'
import CardCategory from './Cards/CardCategory'
import styled from "styled-components";

import {Container} from "react-bootstrap";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const Header = styled.div`
  padding: 12px;
`


const Home = () => {
  const [ home, setHome] = useState([])

  useEffect(() => {
    setHome(BookCategory)
  }, [home.length])

const grid = home.map(item => {
  return (
    // console.log(item)
    <CardCategory 
     key={item.id}
     attributes={item}
    />
  )
})

  return (
    <Container>
      <Header>
        <h2>Choose the category of your book</h2>
      </Header>
      <Wrapper>
        {grid}
      </Wrapper>
    </Container>
  )
}

export default Home