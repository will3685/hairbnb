import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  border: 1px solid #efefef;
  margin-bottom: 60px;
  background: #fff;
  height: 50vh;
  border-radius: 10px;
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
        <Flex>
          <div className="salon-image">
            <img src={props.attributes.image_url} alt={props.attributes.name} />
          </div>
          <SalonInfo>
            <div>
              <h3>{props.attributes.name}</h3>
              <div className="salon-description">{props.attributes.description}</div>
              <Review>
                <div className="salon-review">{props.attributes.avg_score} Estrelas</div>
                <div>(300 comentários)</div>
              </Review>
              <LinkWrapper>
                <Link to={`/salons/${props.attributes.slug}`}> View Salon </Link>
              </LinkWrapper>
            </div>
            <div>Heart</div>
          </SalonInfo>
        </Flex>
  )
}

export default Salon
