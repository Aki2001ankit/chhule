import React from "react";
import "./homevr.css";
import Card from "./card";
import data from "./data";

const Writtensection = () => {
  const Ncards = (val) => {
    return (
      <>
        <Card
          icon={val.icon}
          heading={val.heading}
          description={val.description}
        />
      </>
    );
  };
  return (
    <>
      <div className="row col-12 col-md-5  ">
        <div className="col-10 col-md-8 m-auto  p-auto text-center">
          <p className=" mb-0 text-style">STANDING OUT</p>
          <p className=" text-style-blur">OF THE CROWD</p>
        </div>
        <div>{data.map(Ncards)}</div>
      </div>
    </>
  );
};
export default Writtensection;
