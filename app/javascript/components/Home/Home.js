import React, { useState, useEffect, Fragment } from "react";
import BookCategory from './BookCategory'
import CardCategory from './Cards/CardCategory'
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`
const Header = styled.div`
  h1 {
    font-size: 42px;
  }
`
const BookCard = styled.div`
 padding: 40px;
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
    <BookCard>
      <Header>
        <h1>Choose the category of your book</h1>
      </Header>
      <Wrapper>
        {grid}
      </Wrapper>
    </BookCard>
  )
}

export default Home