import React from "react";
import "../../template/Product/Product.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import ReactStars from "react-stars";

export default function ProductCard(product) {
  return (
    <React.Fragment>
      <Card className="o-product__description" style={{ border :" 3px solid rgb(66 59 59 / 13%)",width: "14rem", marginBottom: "20px", height: "300px", "marginRight": "20px" }}>
        <Card.Body className="list_card">
          <Card.Title>{product.Appliances}</Card.Title>
          <Card.Title>Price: {product.Price}</Card.Title>
          <Card.Text>Description: {product.HeaderTitle}</Card.Text>
          <ReactStars
              count={5}
              edit={false}
              value={product.ratevalue}
              onChange={product.ratingChanged}
              size={24}
              color2={"#ffd700"}
            />
          <Link to={`Product/${product.id}`}>
            <Button color="primary">Shop Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
