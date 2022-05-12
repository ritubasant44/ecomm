import React, { useState, useEffect } from "react";
import "../../template/Product/Product.css";
import { Button } from "reactstrap";
import { useParams } from "react-router";
import axios from "axios";
import commontext from "../../../static/json/common.json";
import {
    IoLogoLinkedin,
    IoLogoFacebook,
    IoLogoInstagram,
  } from "react-icons/io";

export default function Aside(props) {
  const { id } = useParams();
  let dropdown_data = ["1", "2", "3", "4", "5"];

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [savepercent, setSavepercent] = useState();
  const [save, setSave] = useState();

  useEffect(() => {
    const getSingleProductData = async () => {
      const { data } = await axios.get(
        `http://localhost:9090/ecomm/products/${id}`
      );
      setTitle(data.Appliances);
      console.log(data.Appliances);
      setPrice(data.Price);
      
      
      const savingpercent=
      ~~(((Number(data.Price)-
      Number(data.offer_price))/Number(data.Price))*100);
      setSavepercent(savingpercent)

      const mydeal=
      Number(data.Price)-
      Number(data.offer_price);
      setSave(mydeal);
    };
    getSingleProductData();
  }, []);

  // Catch Rating value
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <React.Fragment>
         {commontext.map((rowdata, index) => (
                      <div style={{ display: "flex", marginLeft: "47px" }}>
                        <a
                          href={rowdata.footerlink.Action_linkedin}
                          className="a-footer__socialMedia"
                          style={{ color: "#212529", padding: "0 3px" }}
                        >
                          <IoLogoLinkedin />
                        </a>
                        <a
                          href={rowdata.footerlink.Action_facebook}
                          className="a-footer__socialMedia"
                          style={{ color: "#212529", padding: "0 3px" }}
                        >
                          <IoLogoFacebook />
                        </a>
                        <a
                          href={rowdata.footerlink.Action_instagram}
                          className="a-footer__socialMedia"
                          style={{ color: "#212529", padding: "0 3px" }}
                        >
                          <IoLogoInstagram />
                        </a>
                        <p
                          style={{
                            color: "#f21541",
                            margin: "3px 6px",
                            fontStyle: "oblique",
                          }}
                        >
                          Share
                        </p>
                      </div>
                    ))}
      <aside className="o-product__productInfo pb-lg-4">
                      <div className="col">
                        <div
                           className="asideoffer"
                        >
                          <div className="GeoLocationCard d-flex">
                            <div className="GeoBodyHead">
                              <input type="radio" checked="checked" />
                            </div>
                            <div style={{ marginLeft: "8px" }}>
                              <span className="GeoLinkText">With Exchange</span>
                            </div>
                          </div>
                          <div
                            className="text-danger"
                            style={{ marginLeft: "22px" }}
                          >
                            Upto ₹5000 Off
                          </div>
                        </div>
                        <div
                          className="asideoffer mt-2"
                         
                        >
                          <div className="GeoLocationCard d-flex">
                            <div className="GeoBodyHead">
                              <input type="radio" />
                            </div>
                            <div style={{ marginLeft: "8px" }}>
                              <span className="GeoLinkText">
                                Without Exchange
                              </span>
                            </div>
                          </div>
                          <div>
                            <span
                              className="text-danger"
                              style={{ marginLeft: "22px" }}
                            >
                              ₹13000
                            </span>{" "}
                            <span
                              style={{
                                textDecoration: "line-through",
                                marginLeft: "15px",
                              }}
                            >
                              ₹43000
                            </span>
                          </div>
                        </div>
                        <div
                          className="mb-3"
                          id="mir-layout-DELIVERY_BLOCK-slot-DELIVERY_MESSAGE"
                        >
                          Get it <b> Friday, May 13, 11AM-6PM</b>. Pick a
                          convenient slot at checkout
                        </div>
                        <div id="contextualIngressPt">
                          <div id="contextualIngressPtPin"></div>
                          <span
                            id="contextualIngressPtLabel"
                            className="cip-a-size-small"
                          >
                            <a
                              href="#"
                              id="contextualIngressPtLabel_deliveryShortLine"
                            >
                              Select delivery location
                            </a>
                          </span>
                        </div>
                        <div className="a-section a-spacing-mini">
                          {" "}
                          <div
                            id="merchant-info"
                            className="a-section a-spacing-mini"
                          >
                            {" "}
                            <span>Sold by </span>
                            <a className="a-link-normal" href="#">
                              <span style={{ fontWeight: "bold" }}>
                                DAWNTECH ELECTRONICS PRIVATE LIMITED
                              </span>
                            </a>
                            <span> and </span>
                            <a className="a-link-normal" href="#">
                              <span>Fulfilled by Us</span>
                            </a>
                            <span>.</span> <span class=""></span>
                          </div>{" "}
                        </div>

                        <Button
                          style={{ marginTop: "10px", width: "100%" }}
                          color="danger"
                        >
                          Add to cart
                        </Button>
                        <Button
                          style={{ marginTop: "10px", width: "100%" }}
                          color="primary"
                        >
                          Buy now
                        </Button>
                        <div
                          data-a-input-name="gift-wrap"
                          className="a-checkbox"
                        >
                          <label for="gift-wrap">
                            <input
                              id="gift-wrap"
                              type="checkbox"
                              name="gift-wrap"
                              value="yes"
                            />
                            <i className="a-icon a-icon-checkbox"></i>
                            <span
                              className="a-label a-checkbox-label"
                              style={{ marginLeft: "10px" }}
                            >
                              Add gift options
                            </span>
                          </label>
                        </div>
                       
                        {/* //sectionend */}
                      </div>
                      <Button
                          style={{ marginTop: "10px", width: "100%" }}
                          color="secondary"
                        >
                          Add to wish List
                        </Button>
                      <div className="a-box-inner">
                        <i class="a-icon a-icon-touch-link"></i>{" "}
                        <div className="olp-text-box">
                          <span>New (3) from</span>
                          <span className="a-size-base a-color-base">
                            ₹38,290.00
                          </span>{" "}
                          <span>&nbsp;</span>
                          <span>
                            <i className="a-icon-wrapper a-icon-fba-with-text">
                              <i
                                className="a-icon a-icon-fba"
                                role="img"
                                aria-label="Fulfilled"
                              ></i>
                              <span className="a-icon-text-fba">Fulfilled</span>
                            </i>{" "}
                            FREE Scheduled Delivery
                          </span>{" "}
                        </div>
                        <i
                          className="a-icon a-icon-arrow a-icon-small arrow-icon"
                          role="presentation"
                        ></i>{" "}
                      </div>
                       {/* //sectionend 2*/}
                    </aside>
    </React.Fragment>
  );
}
