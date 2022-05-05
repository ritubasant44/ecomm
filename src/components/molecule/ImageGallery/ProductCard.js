import React, { useState, useEffect } from "react";
import "../../template/Product/Product.css";
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default function ProductCard(product) {

  return (
    <React.Fragment>
        <Link to={`Product/${product.id}`}>
      <Card style={{"width": "18rem"}}>
          <Card.Body>
              <Card.Title>Title: {product.Appliances}</Card.Title>
              <Card.Title>Price: {product.Price}</Card.Title>
              <Card.Text>Description: {product.HeaderTitle}</Card.Text>
          </Card.Body>
      </Card>
      </Link>
    </React.Fragment>
  );
}
