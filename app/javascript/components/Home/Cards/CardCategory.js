import React from "react";
import { Card } from 'antd';
import { Link } from "react-router-dom";

const { Meta } = Card

const CardCategory = (props) => {
  return (
    <Link to={"/salons"}>
      <Card 
        hoverable
        style={{ width: 284 }}
        cover={<img alt="book-category-image" src={props.attributes.image_url} />}
        >
        <Meta title={props.attributes.name} description={props.attributes.description} />
      </Card>
    </Link>
  )
}

export default CardCategory