import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../Utilities/Sliders/slider.jpg";
import slider2 from "../../Utilities/Sliders/slider1.jpg";
import slider3 from "../../Utilities/Sliders/slider2.jpg";
import "../HeroSection/HeroSection.css";
const HeroSection = () => {
  return (
    <div className="height mx-auto mt-2">
      <div className="container ">
        <Carousel controls={true} indicators={false} interval={3000}>
          <Carousel.Item className="drk">
            <img className="d-block w-100 " src={slider1} alt="First slide" />
            <Carousel.Caption className="ccd bgDark">
              <h3 className="fs-2">
                “Travel is the only thing you buy that makes you richer”
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="drk">
            <img className="d-block w-100" src={slider2} alt="Second slide" />

            <Carousel.Caption className="ccd bgDark">
              <h3 className="fs-2">
                It feels good to be lost in the right direction
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="drk">
            <img className="d-block w-100" src={slider3} alt="Third slide" />

            <Carousel.Caption className="ccd bgDark">
              <h3 className="fs-2">Life is a journey, not a destination</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
