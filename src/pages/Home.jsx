import React from "react";
import SectionFirst from "../components/section-1/Section1";
import Footer from "../components/footer/Footer";
import Homevr from "../components/section-3(homevr)/homevr";
import Glimpses from "../components/past glimpses/pastGlimpses";
 import Section2 from '../components/section-2/Section2'
import Review from "../components/review/review";

const Home = () => {
  return (
    <>
      <SectionFirst />
       <Section2/>  
      <Homevr />
     <Review/>
      <Glimpses />
      <Footer />
    </>
  );
};

export default Home;
