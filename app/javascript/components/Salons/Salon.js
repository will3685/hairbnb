import React, { Fragment } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";


import { Card, Carousel } from "react-bootstrap";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  // justify-content: space-between;
  // border: 1px solid #efefef;
  // margin-bottom: 60px;
  // background: #fff;
  // height: 50vh;
  // border-radius: 10px;
`

const FlexContent = styled.div`
  display: flex;
  justify-content: "space-between";
`

const SalonInfo = styled.div`
  width: 100%;
  padding: 20px 10px 0px 20px;
  display: flex;
  justify-content: space-between;
`

const Review = styled.div`
  display: flex;
  justify-content: space-between;
`

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none
  }
`

const Salon = (props) => {
  return (

    <Fragment>
      <Card style={{ height: 368, marginBottom: 24}}>
        <Flex>
          <Carousel style={{ height:368, width: "50%"}}>
            <Carousel.Item>
              <img /> 
            </Carousel.Item>
          </Carousel>
          <FlexContent> 
            <div>
              <h3>{props.attributes.name}</h3>
              <h4>{props.attributes.description}</h4>
              <p>{props.attributes.avg_score} Estrela</p>
              <p>(300 comentários)</p>
              <LinkWrapper>
               <Link to={`/salons/${props.attributes.slug}`}> View Salon </Link>
              </LinkWrapper>
            </div>
            <div>Heart</div>
          </FlexContent>
        </Flex>
      </Card>
    </Fragment>
  )
}

export default Salon
