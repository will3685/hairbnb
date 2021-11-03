import React, { Fragment } from "react";

const Header = (props) => {
  const {name, description} = props.attributes

  return (
    <Fragment>
      <h1> {name} </h1>
      <h3> {description} </h3>
    </Fragment>
  )
  
}

export default Header