import { OmitProps } from "antd/lib/transfer/ListBody";
import React from "react";

const Salon = () => {
  return (
    <div className="card">
      <div className="salon-image">
        <img src={props.attributes.image_url} alt={props.attributes.name} />
      </div>
      <div className="salon-name">{props.attributes.name}</div>
      <div className="salon-description">{props.attributes.description}</div>
      <div className="salon-review">{props.attributes.avg_score}</div>
      <div className="salon-link"></div>
    </div>
  )
}