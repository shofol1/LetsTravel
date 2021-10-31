import React from "react";
import HowItWork from "../HowITWork/HowItWork";
import Header from "../Header/Header";
import Offers from "../Offers/Offers";
import PartnerSlider from "../PartnerSlider/PartnerSlider";
import HeroSection from "../HeroSection/HeroSection";
import useAuth from "../../Hooks/useAuth";
import { Spinner } from "react-bootstrap";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <div>
        <HeroSection></HeroSection>
        <Offers></Offers>
        <HowItWork></HowItWork>
        <PartnerSlider></PartnerSlider>
      </div>
    </div>
  );
};

export default Home;
