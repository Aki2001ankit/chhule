import React from "react";
import "./homevr.css";
import Imagesection from "./imagesection";

import Writtensection from "./writtensection";
const Homevr = () => {
  return (
    <>
      <div className="row">
        <Writtensection />
        <Imagesection />
      </div>
    </>
  );
};
export default Homevr;
