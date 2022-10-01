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
      <div className="bg-border-bottom">

</div>
    </>
  );
};
export default Homevr;
