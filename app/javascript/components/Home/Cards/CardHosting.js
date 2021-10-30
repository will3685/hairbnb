import React from "react";
import { Card, Button} from 'antd';

const cardGrid = {
  paddingBottom: 25,
  color: '#fff',
}

const CardHosting = () => {
  return ( 
    <Card 
      style={{ height: 484 }}>
      <Card.Grid 
        hoverable={false} 
        style={{ width: '50%', height: 484, alignItems:"center" , paddingTop: 56,  backgroundColor: '#0E0E0E' }}>
        <h1 style={cardGrid}>Become a hair stylist in your city</h1>
        <h2 style={cardGrid}>be part of the biggest hairstylist platform, show your product to the world</h2>
        <Button
        size= "large" 
        type="default"
          href={"#"}>Check it now</Button>
      </Card.Grid >
      <Card.Grid 
        hoverable={false}
        style={{ width: '50%', height: 484, backgroundColor: 'gray'}}
        ></Card.Grid>
    </Card>
  )
}

export default CardHosting