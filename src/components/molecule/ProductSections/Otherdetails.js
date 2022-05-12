import React, { useState, useEffect } from "react";
import "../../template/Product/Product.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { useParams } from "react-router";
import axios from "axios";
// import ProductList from './ProductList';
import ReactStars from "react-stars";
import Progressbar from "../Progressbar";
import Select from "react-select";
import { Table } from "reactstrap";

export default function Otherdetails(props) {
  const { id } = useParams();
  let dropdown_data = ["1", "2", "3", "4", "5"];

  const [description, setDescription] = useState("");
  const [about, setAbout] = useState("")
  const [specialfeature, setSpecialfeature] = useState("")
  const [warrenty, setWarrenty] = useState("")
  const [productColor, setproductColor] = useState("")
  const [Itemweight, setItemweight] = useState("")
  const [maufacturer, setmaufacturer] = useState("")
  const [origin, setOrigin] = useState("")
  const [brand, setBrand] = useState("")

  useEffect(() => {
    const getSingleProductData = async () => {
      const { data } = await axios.get(
        `http://localhost:9090/ecomm/products/${id}`
      );
      setDescription(data.HeaderTitle);
      setAbout(data.About);
      setSpecialfeature(data.Features.Specialfeature);
      setWarrenty(data.Warranty)
      setproductColor(data.Color)
      setItemweight(data.Itemweight)
      setmaufacturer(data.Manufacturer)
      setOrigin(data.countryOfOrigin)
      setBrand(data.Features.Brand)
    };
    getSingleProductData();
  }, []);

  // Catch Rating value
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <React.Fragment>
      <div className="padding-specs-rich-content show">
            <div className="container-fluid">
              <div className="container p-0">
                <div className="row">
                  <div className="col-12 pr-lg-3 pl-lg-3">
                    <div className="o-product__productSpecs pb-0">
                      <div className="m-product__productSpecsList d-block d-lg-none mt-4 mb_specs"></div>
                      <div className="o-product__productSpecsList d-none d-lg-block">
                        <section>
                          <div className="o-product__productSpecsDetails">
                            <div className="col-7">
                              <span className="mdc-tab__content">
                                <span className="mdc-tab__text-label">
                                 Product Details
                                </span>
                              </span>
                            </div>
             {/*     Product Other Detail  */}
                  <ul style={{listStyle: "none", marginTop: "10px"}}>
                      <li className="mt-2">
                          <span style={{fontWeight: "bold"}}>Description: </span><span> {description}</span>
                      </li>
                      <li className="mt-2">
                          <span style={{fontWeight: "bold"}}>Manufacturer: </span><span> {maufacturer}</span>
                      </li>
                      <li className="mt-2">
                          <span style={{fontWeight: "bold"}}>Brand: </span><span> {brand}</span>
                      </li>
                      <li className="mt-2">
                          <span style={{fontWeight: "bold"}}>Origin: </span><span> {origin}</span>
                      </li>
                      <li className="mt-2">
                          <span style={{fontWeight: "bold"}}> It includes: </span><span> { about}</span>
                      </li>
                      <li className="mt-2">
                          <span style={{fontWeight: "bold"}}>  Special Feature: </span><span>  { specialfeature}</span>
                      </li>
                      <li className="mt-2">
                          <span style={{fontWeight: "bold"}}>  Warranty: </span><span>{ warrenty} Years</span>
                      </li>
                      <li className="mt-2">
                          <span style={{fontWeight: "bold"}}>  Color: </span><span>{ productColor}</span>
                      </li>
                      <li className="mt-2">
                          <span style={{fontWeight: "bold"}}>  Item Weight: </span><span>{ Itemweight}</span>
                      </li>
                  </ul>

               {/*     Product Other Detail end */}
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </React.Fragment>
  );
}
