import React, { useState, useEffect } from "react";
import "../../template/Product/Product.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

export default function ProductList(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductData = async () => {
      const response = await axios.get("http://localhost:9090/getproduct");
      setProducts(response.data);
      console.log(response);
    };
    getProductData();
  }, []);
  return (
    <React.Fragment>
      <Container>
        <h1 className="text-center">All Products</h1>
        <Row>
          {products.map((product) => {
            return (
              <Col md={6} lg={4} sm={12} key={product.id}>
                <ProductCard
                id={product.id}
                  Appliances={product.Appliances}
                  Price={product.Price}
                  HeaderTitle={product.HeaderTitle}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
}
