import React from "react";
import Grid from "@material-ui/core/Grid";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./Product.css";
import MyImageGallery from "../../molecule/ImageGallery/ImageGallery";
import ProductDetail from '../../molecule/ImageGallery/ProductDetails';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbs: [{ name: "Home", route: "/" }, { name: "Product" }],
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="d-none d-lg-block m-product__BreadCrumb">
          <div className="container-fluid breadcrumb">
            <Breadcrumb className="m-breadcrumb-list">
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Products</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <section className="o-product__detail">
          <div className="container o-product__mainContainer">
            {/* Main section */}

            <main>
              {/* Image Gallery  */}
              <div className="min-vh-90">
                <div className="carousel o-product__image">
                  <figure className="o-gallery__pdp--desktop pzlcontainermain d-none d-lg-block retain-css-property-value">
                    <MyImageGallery />
                  </figure>
                </div>
              </div>
              {/* Product Description  */}
          <ProductDetail 
              prodTitle="iPhone 13"
              prodinfo="Código de Producto:"
              prodcode="1088110591"
              />
            </main>

            {/* Main section end*/}
            <div className="a-product__separator"></div>

            {/* Aside section */}
            <aside className="o-product__purchase p-0 pt-lg-3 pr-lg-3 pl-lg-3 GeoTopMargin">
              sdfdsdfdsf
            </aside>
            {/* Aside section end*/}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Product;
