import React, { useState, useEffect } from "react";
import "../../template/Product/Product.css";
import imagegallery from "./imagegal";
import ReactImageMagnify from "react-image-magnify";
import axios from "axios";
import { useParams } from "react-router";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function MyImageGallery(props) {
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get(
        `http://localhost:9090/ecomm/products/${id}`
      );
      console.log("Images Data", response.data.MediaUrls[0].Urls);
      setSelectedImg(response.data.MediaUrls[0].Urls);
    };
    fetchAPI();
  }, []);

  return (
    <React.Fragment>
      <div className="slidestyle">
      <Carousel>
                
                {selectedImg.map((images, index) => (
                    <img 
                       key={index}
                       src={images.url} 
                    />
                    ))}
               
            </Carousel>
        <ul>
         {/*  <div className="verticalSlider___34ZFD carousel__slider carousel__slider--vertical">
            <div className="carousel__slider-tray-wrapper verticalSlideTrayWrap___2nO7o carousel__slider-tray-wrap--vertical">
              <div className="sliderTray___-vHFQ sliderAnimation___300FY carousel__slider-tray verticalTray___12Key carousel__slider-tray--vertical">
                <li className="img-viewer">
                  <div className="slide___3-Nqo carousel__slide carousel__slide--visible">
                    <div className="slideInner___2mfX9 carousel__inner-slide">
                      {selectedImg.map((images, index) => (
                        <img
                          className="pdpthumb lazyloaded"
                          src={images.url}
                          alt="forst"
                          key={index}
                          onClick= {() => setSelectedImg(images(index))}
                        />
                      ))}
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </div> */}
        </ul>
      </div>
     {/*  <div className="pzlcontainerviewer viewerImg">
      {selectedImg.map((images, index) => (
        <img key={index} src={images.url} alt="Display Container" className="selected" />
      ))}
      </div> */}
    </React.Fragment>
  );
}
