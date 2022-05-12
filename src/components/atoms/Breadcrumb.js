import React from 'react';
import BreadcrumbItem from "react-bootstrap/Breadcrumb";

export default function Breadcrumb ({ classNameIcon, ...props }) {
    return (
        <div className="d-none d-lg-block m-product__BreadCrumb">
        <div className="container-fluid breadcrumb">
          <Breadcrumb className="m-breadcrumb-list">
            <Breadcrumb.Item href="/">{props.homepage}</Breadcrumb.Item>
            <Breadcrumb.Item href="/Productlist">
              {props.productlist}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{props.products}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    );
  };
  