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
import { Badge } from "reactstrap";

export default function ProductDetail(props) {
  const { id } = useParams();
  let dropdown_data = ["1", "2", "3", "4", "5"];

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [pcode, setPcode] = useState(0);
  const [description, setDescription] = useState("");
  const [ratevalue, setRatevalue] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [allratings, setAllratings] = useState(0);
  const [fiverating, setFiverating] = useState(0);
  const [fourrating, setFourrating] = useState(0);
  const [threerating, setThreerating] = useState(0);
  const [tworating, setTworating] = useState(0);
  const [onerating, setOnerating] = useState(0);
  const [quantity, setQuantity] = useState([]);
  const [dropdown, setDropdown] = useState([]);
  const [offerprice, setOfferprice] = useState("");
  const [save, setsave] = useState("");
  const [savepercent, setSavepercent] = useState("");
  const [maufacturer, setmaufacturer] = useState("");

  useEffect(() => {
    const getSingleProductData = async () => {
      const { data } = await axios.get(
        `http://localhost:9090/ecomm/products/${id}`
      );
      setTitle(data.Appliances);
      console.log(data.Appliances);
      setPrice(data.Price);
      setDescription(data.HeaderTitle);
      setPcode(data.Product);
      setRatevalue(data.Ratings.OverallRating);
      setQuantity(data.Quantity);
      setDropdown(dropdown_data);
      setOfferprice(data.offer_price);
      setmaufacturer(data.Manufacturer)

      const savingpercent = ~~(
        ((Number(data.Price) - Number(data.offer_price)) / Number(data.Price)) *
        100
      );
      setSavepercent(savingpercent);

      const mydeal = Number(data.Price) - Number(data.offer_price);
      setsave(mydeal);

      const productQ = data.Quantity;
      console.log("quan", productQ);
      const allstar =
        Number(data.Ratings.StarRating.Star1) +
        Number(data.Ratings.StarRating.Star2) +
        Number(data.Ratings.StarRating.Star3) +
        Number(data.Ratings.StarRating.Star4) +
        Number(data.Ratings.StarRating.Star5);

      setAllratings(allstar);

      setFiverating(~~((data.Ratings.StarRating.Star5 / allstar) * 100));
      setFourrating(~~((data.Ratings.StarRating.Star4 / allstar) * 100));
      setThreerating(~~((data.Ratings.StarRating.Star3 / allstar) * 100));
      setTworating(~~((data.Ratings.StarRating.Star2 / allstar) * 100));
      setOnerating(~~((data.Ratings.StarRating.Star1 / allstar) * 100));
    };
    getSingleProductData();
  }, []);

  // Catch Rating value
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <React.Fragment>
      <div
        className="o-product__description"
        style={{ width: "auto" }}
      >
       
          <div className="a-product__information--title">{title}</div>
          <div>
            {" "}
            <p className="m-product__information--code">
              Product Code:
              <span>{pcode}</span>
              <span></span>
            </p>
          </div>
          {/* star ratings  */}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              className="m-product__information--rating"
              style={{ width: "100px", position: "relative" }}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <ReactStars
                count={5}
                edit={false}
                value={ratevalue}
                onChange={ratingChanged}
                size={24}
                color2={"#ffd700"}
              />
            </div>
            <div className="mt-2 font-weight-bold">
              <span style={{marginLeft: "10px"}}>{allratings}</span>
              <span>  Ratings</span>
            </div>
          </div>
          <div className="badge my-2">
          <Badge color="warning">Best Seller</Badge>
          </div>
          {isShown && (
            <div className="rating_details">
              <div style={{ display: "flex", "flex-direction": "row" }}>
                <ReactStars
                  count={5}
                  edit={false}
                  value={ratevalue}
                  onChange={ratingChanged}
                  size={24}
                  color2={"#ffd700"}
                />
                <h5 style={{ padding: "7px 20px" }}>{ratevalue} Out of 5</h5>
              </div>
              <div>
                <p>Global Ratings: {allratings}</p>
              </div>

              {/* Progressbar */}

              <div className="Progressbar">
                <Progressbar
                  bgcolor="orange"
                  progress={fiverating}
                  height={20}
                  sValue={"5 Star"}
                />
                <Progressbar
                  bgcolor="orange"
                  progress={fourrating}
                  height={20}
                  sValue={"4 Star"}
                />
                <Progressbar
                  bgcolor="orange"
                  progress={threerating}
                  height={20}
                  sValue={"3 Star"}
                />
                <Progressbar
                  bgcolor="orange"
                  progress={tworating}
                  height={20}
                  sValue={"2 Star"}
                />
                <Progressbar
                  bgcolor="orange"
                  progress={onerating}
                  height={20}
                  sValue={"1 Star"}
                />
              </div>
            </div>
          )}
          <div className="font-weight-bold">Description: {description}</div>

          <div className="Qdropdown">
            <h5 className="font-weight-bold">Select Quantity :</h5>
            <select>
              <option>Select</option>
              {dropdown.map((item) => (
                <option>{item}</option>
              ))}
            </select>
          </div>
          <div className="mt-3" style={{textDecoration: 'line-through'}}>MRP: ₹ {price}</div>
          <div>Price: <spn className="text-danger" style={{fontSize: "20px"}}> ₹ {offerprice}</spn></div>
          <div className="mt-3 text-danger">
            You Saved: ₹ {save} ({savepercent} %)
          </div>
          <div className="my-2">
            Manufacturer:  {maufacturer}
          </div>
          <div style={{fontStyle: "oblique"}}>Inclusive all taxes</div>
          {/*   {quantity.map(option => (
                   <div className="dropdown-content" onclick={e => setQuantity(option)
                    (e.target.textContent)}>{option}</div>
                
               ))} */}
        
        <Button style={{ marginTop: "10px" }} color="danger">
          Add to cart
        </Button>
        <Button
          style={{ marginTop: "10px", "margin-left": "10px" }}
          color="primary"
        >
          Buy now
        </Button>
      </div>
    </React.Fragment>
  );
}
