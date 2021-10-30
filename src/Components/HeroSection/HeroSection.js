import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../Utilities/Sliders/slider.jpg";
import slider2 from "../../Utilities/Sliders/slider1.jpg";
import slider3 from "../../Utilities/Sliders/slider2.jpg";
import "../HeroSection/HeroSection.css";
const HeroSection = () => {
  return (
    <div className="height mx-auto">
      <div className="container ">
        <Carousel controls={false} indicators={false} interval={3000}>
          <Carousel.Item className="drk">
            <img className="d-block w-100 " src={slider1} alt="First slide" />
            <Carousel.Caption className="ccd bgDark">
              <h3 className="fs-2">Pain is weakness leaving the body</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="drk">
            <img className="d-block w-100" src={slider2} alt="Second slide" />

            <Carousel.Caption className="ccd bgDark">
              <h3 className="fs-2">A winner never whines</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="drk">
            <img className="d-block w-100" src={slider3} alt="Third slide" />

            <Carousel.Caption className="ccd bgDark">
              <h3 className="fs-2">Never Give Up</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
