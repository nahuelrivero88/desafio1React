import React from "react";
import {Card} from "react-bootstrap"
import { ItemCount } from "../ItemCount/ItemCount";

export const ProductCard = ({img, nombre}) => {
  return (
    
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className='text-center'>{nombre}</Card.Title>
        </Card.Body>
        <ItemCount stock="5"/>
      </Card>
    
  );
};
