import React from "react";
import track_1 from "../../assets/images/track_1.png";
import Navbar from "../navbar/Navbar";
import logo from "../navbar/logo.svg";
import logo_m from "../navbar/logo_m.svg";

import "./section1.css";

const Section_1 = () => {
  return (
    <>
      <div className="grid">
        <div className="grid_item">
          <Navbar 
            logo ={logo}
            logo_m={logo_m}
          />
          <p>hello from git</p>
          <div>
            <div className="content">
              <p className="main_heading">EXPLORE TO LEARN</p>
              
              <div>
                <p className="sub_heading">
                  SEEING the WORLD through UNIQUE LENS
                </p>
                <p className="des_heading">
                  We organize finely crafted educational tours
                </p>
                <p className="des_heading">for students and foreigners!</p>
              </div>
            </div>
            <button className="btn-plan">PLAN MY TRIP</button>
          </div>
        </div>
        <div className="grid_item_2">
          <div className="bg_purple">
            <img src={track_1} alt="trak_image" />
          </div>
        </div>
        {/* <Footer/> */}
      </div>
      <div className="bg-border-bottom"></div>
    </>
  );
};

export default Section_1;
