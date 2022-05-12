import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../../organism/header/Header";
import HomeBody from "../../template/HomeBody";
import Footer from '../../organism/Footer/Footer';
import Product from '../../template/Product/Product';
import ProductList from '../../molecule/ProductSections/ProductList';
// import ProductDetails from '../../molecule/ImageGallery/ProductDetails';

class Home extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <Header />
        <Routes>
            <Route exact path="/" element={<HomeBody />} />
            <Route exact path="/ProductList" element={<ProductList />} />
            <Route exact path="ProductList/Product/:id" element={<Product />} />           
          </Routes>
        <Footer />
      </React.Fragment>
      </BrowserRouter>
    );
  }
}
export default Home;
