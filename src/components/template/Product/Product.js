import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./Product.css";
import MyImageGallery from "../../molecule/ProductSections/ImageGallery";
import ProductDetails from "../../molecule/ProductSections/ProductDetails";
import Otherdetails from "../../molecule/ProductSections/Otherdetails";
import Aside from '../../molecule/ProductSections/Aside';



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
              <Breadcrumb.Item href="/Productlist">
                Product List
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Products</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <section className="o-product__detail">
          <div className="row container o-product__mainContainer">
            {/* Main section */}

            <main className="col-12 col-lg-12">
              {/* Image Gallery  */}
              <div className="min-vh-90">
                <div className="carousel o-product__image">
                  <figure className="o-gallery__pdp--desktop pzlcontainermain d-none d-lg-block retain-css-property-value">
                    <MyImageGallery />
 
                  </figure>
                </div>
              </div>
              {/* Product Description  */}
              <ProductDetails />
            </main>

            {/* Main section end*/}

            {/* Aside section */}
            <aside className="col-3 col-lg-3 o-product__purchase p-0 pt-lg-3 pr-lg-3 pl-lg-3 GeoTopMargin">
              <div>
                <div className="row">
                  <div className="col-lg-12 col-12">
                   <Aside />
                  </div>
                </div>
              </div>
            </aside>
            {/* Aside section end*/}
          </div>
        </section>
        <section>
          {/* Other details section */}

          <Otherdetails />

          {/* End of Other details section */}
        </section>
      </React.Fragment>
    );
  }
}
export default Product;
