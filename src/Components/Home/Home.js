import React from "react";
import HowItWork from "../../HowITWork/HowItWork";
import Header from "../Header/Header";
import Offers from "../Offers/Offers";
import PartnerSlider from "../PartnerSlider/PartnerSlider";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Offers></Offers>
      <HowItWork></HowItWork>
      <PartnerSlider></PartnerSlider>
    </div>
  );
};

export default Home;
