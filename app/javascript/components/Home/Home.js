import React, { useState, useEffect, Fragment } from "react";

import BookCategory from './BookCategory'
import EventCategory from "./EventCategory";
import CardCategory from './Cards/CardCategory'
import CardHosting from "./Cards/CardHosting";
import CardEvent from "./Cards/CardEvent";
import Footer from "./Footer"

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
const FooterWrapper = styled.div`
  overflow: hidden;
`

const Home = () => {
  const [ book, setBook] = useState([])
  const [ event, setEvent] = useState([])

  useEffect(() => {
    setBook(BookCategory)
    setEvent(EventCategory)
  }, [])

const gridCategory = book.map(book => {
  return (
    <CardCategory 
     key={book.id}
     attributes={book}
    />
  )
})

const gridEvent = event.map(event => {
  return (
    <CardEvent 
     key={event.id}
     attributes={event}
    />
  )
})
  return (
    <Fragment>
      <Container>
          <HomeWrapper>
          <Header>
            <h2>Choose the category of your appointment</h2>
          </Header>
          <Wrapper>
            {gridCategory}
          </Wrapper>
          <WrapperHost>
            <CardHosting/>
          </WrapperHost>
          <Header>
            <h2>Descubra tudo relaciona a beleza perto de você</h2>
          </Header>
          <Wrapper>
            {gridEvent}
          </Wrapper>
        </HomeWrapper>
      </Container>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Fragment>
  )
}

export default Home