import React, { useState } from "react";
import "../../template/Product/Product.css";
import productimage from "../../../static/json/productimage.json";
import imagegallery from "./imagegal";
import ReactImageMagnify from "react-image-magnify";
import { withStyles } from "@material-ui/core/styles";

export default function MyImageGallery() {
  const [selectedImg, setSelectedImg] = useState(imagegallery[0]);
  return (
    <React.Fragment>
      <div className="pzlcontainerthumbs thumbs_pdp pzlContainerLeft">
        <ul>
          <div className="verticalSlider___34ZFD carousel__slider carousel__slider--vertical">
            <div className="carousel__slider-tray-wrapper verticalSlideTrayWrap___2nO7o carousel__slider-tray-wrap--vertical">
              <div className="sliderTray___-vHFQ sliderAnimation___300FY carousel__slider-tray verticalTray___12Key carousel__slider-tray--vertical">
                <li className="img-viewer">
                  <div className="slide___3-Nqo carousel__slide carousel__slide--visible">
                    <div className="slideInner___2mfX9 carousel__inner-slide">
                      {imagegallery.map((img, index) => (
                        <img
                          style={{
                            border:
                              selectedImg === img ? "4px solid #e10098" : "",
                          }}
                          className="pdpthumb lazyloaded"
                          src={img}
                          key={index}
                          alt="forst"
                          onClick={() => setSelectedImg(img)}
                        />
                      ))}
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </ul>
      </div>
      <div className="pzlcontainerviewer viewerImg">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: selectedImg
            },
            largeImage: {
              src: selectedImg,
              width: 1200,
              height: 1800,
              zoomLevel: 1.5
            },
          }}
        />
        <img src={selectedImg} alt="Display Container" className="selected" />
      </div>
    </React.Fragment>
  );
}
