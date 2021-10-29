import React from "react";
import HowItWork from "../../HowITWork/HowItWork";
import Header from "../Header/Header";
import Offers from "../Offers/Offers";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Offers></Offers>
      <HowItWork></HowItWork>
    </div>
  );
};

export default Home;
