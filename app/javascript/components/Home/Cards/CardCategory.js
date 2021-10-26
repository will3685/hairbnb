import React, { Fragment } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

const LinkWrapper = styled.div`
  a {
    color: #000;
    text-decoration: none
    }
`
const Image = styled.div`
  img {
    border-radius: 10px;
  }
`
const BookName = styled.div`
  font-size: 22px;
  font-style: bold;
`


const CardCategory = (props) => {
  return (
    <LinkWrapper>
      <Link to={`/salons`}>
        <Image>
          <img src={props.attributes.image_url}></img>
        </Image>
        <BookName>{props.attributes.name}</BookName>
      </Link>
    </LinkWrapper>
  )
}

export default CardCategory