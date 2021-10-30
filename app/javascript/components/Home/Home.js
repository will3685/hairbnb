import React, { useState, useEffect } from "react";

import BookCategory from './BookCategory'
import CardCategory from './Cards/CardCategory'
import CardHosting from "./Cards/CardHosting";

import styled from "styled-components";
import {Container} from "react-bootstrap";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 56px;
`
const WrapperHost = styled.div`
  padding-bottom: 56px;
`

const Header = styled.div`
  padding-bottom: 12px;
`
const HomeWrapper = styled.div`
  overflow: hidden;
`

const Home = () => {
  const [ home, setHome] = useState([])

  useEffect(() => {
    setHome(BookCategory)
  }, [home.length])

const grid = home.map(item => {
  return (
    <CardCategory 
     key={item.id}
     attributes={item}
    />
  )
})

  return (
    <Container>
        <HomeWrapper>
        <Header>
          <h2>Choose the category of your book</h2>
        </Header>
        <Wrapper>
          {grid}
        </Wrapper>
        <WrapperHost>
          <CardHosting/>
        </WrapperHost>
      </HomeWrapper>
    </Container>
  )
}

export default Home