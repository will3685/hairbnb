import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card

const CardEvent = (props) => {
  return (
    <Link to={"#"}>
      <Card 
        hoverable
        style={{ width: 412}}
        cover={<img alt="event-category-image" src={props.attributes.image_url} />}
        >
          <Meta title={props.attributes.name} />
      </Card>
    </Link>
  )
}

export default CardEvent