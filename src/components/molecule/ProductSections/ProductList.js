import React, { useState, useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "../../template/Product/Product.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

export default function ProductList(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductData = async () => {
      const response = await axios.get("http://localhost:9090/ecomm/products");
      setProducts(response.data);
      console.log(response);
    };
    getProductData();
  }, []);
   // Catch Rating value
   const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <React.Fragment>
       <div
      className='breadcrumb'
    >
       <div className="d-none d-lg-block m-product__BreadCrumb">
          <div className="container-fluid breadcrumb">
            <Breadcrumb className="m-breadcrumb-list">
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Product List</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
    </div>
      <Container>
        <h3 className="text-center ">All Products</h3>
        <Row>
          <Col md={2} lg={2} sm={2}>
            sjdfhbh
          </Col>
          <Col md={10} lg={10} sm={12} className='listcard'>
          {products.map((product) => {
            return (
              
                <ProductCard
                  id={product.id}
                  Appliances={product.Appliances}
                  Price={product.Price}
                  HeaderTitle={product.HeaderTitle}
                  ratevalue={product.Ratings.OverallRating}
                />
            
            );
          })}
            </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
