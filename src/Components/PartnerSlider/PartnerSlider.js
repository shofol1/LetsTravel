import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import img1 from "../../Utilities/sponsors/iata-logo-01.png";
import img2 from "../../Utilities/sponsors/lab-gov-city-01.png";
import img3 from "../../Utilities/sponsors/trip-advisor-001.jpg";
import img4 from "../../Utilities/sponsors/trip-advisor-002.jpg";
import "../PartnerSlider/PartnerSlider.css";
class PartnerSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <Container className="mt-5 mb-5 text-center">
        <div>
          <div className="text-center mt-5 mb-5 bg-dark text-white p-4">
            <h2>PARTNERS</h2>
            <h4>People who always support and endorse our good work</h4>
          </div>
          <Slider ref={(slider) => (this.slider = slider)} {...settings}>
            <div>
              <img className="imgRes" src={img1} alt="" />
            </div>
            <div>
              <img className="imgRes" src={img2} alt="" />
            </div>
            <div>
              <img className="imgRes" src={img3} alt="" />
            </div>
            <div>
              <img className="imgRes" src={img4} alt="" />
            </div>
          </Slider>
        </div>
      </Container>
    );
  }
}

export default PartnerSlider;
