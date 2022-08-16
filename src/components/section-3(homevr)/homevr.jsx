import React from "react";
import "./homevr.css";
import { GiThreeFriends, GiSkills } from "react-icons/gi";

import { IconContext } from "react-icons";
import { BsFillShieldFill } from "react-icons/bs";
const Homevr = () => {
  return (
    <>
      <div className="row  container col-12 mx-auto">
        <div className="col-12 col-md-5 col-lg-4 ">
          <div className="">
            <h1 className="head-text m-5">STANDING OUT OF THE CROWD!</h1>

            <IconContext.Provider value={{ color: "black", size: "2.325em" }}>
              <div className="  row col-12 m-auto">
                <div className="col-3 col-md-12   m-auto mb-md-5 ">
                  <div className="row ">
                    <div className="col-12 col-md-4  text-center m-auto">
                      {" "}
                      <BsFillShieldFill />
                    </div>
                    <div className="col-12 col-md-8  text-center text-md-left mt-auto mb-auto">
                      <h6 className="icon-font">
                        <strong>100% Safety </strong>
                        using smart communication technology involving IoT
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-md-12  mx-auto  mb-md-5">
                  <div className="row">
                    <div className="col-12 col-md-4  text-center m-auto">
                      {" "}
                      <GiSkills />
                    </div>
                    <div className="col-12 col-md-8 text-center text-md-left mt-auto mb-auto">
                      <h6 className="icon-font">Life Skills</h6>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-md-12  mx-auto mb-md-5">
                  <div className="row">
                    <div className="col-12 col-md-4  text-center m-auto">
                      {" "}
                      <GiThreeFriends />
                    </div>
                    <div className="col-4 col-md-8  text-center text-md-left mt-auto mb-auto">
                      <h6 className="icon-font">Fun Learning</h6>
                    </div>
                  </div>
                </div>
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div className="col-12 col-md-7 col-lg-8 bg-success">hello</div>
      </div>
    </>
  );
};
export default Homevr;
