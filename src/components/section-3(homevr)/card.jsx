import React, { useState } from "react";
import { IconContext } from "react-icons";
import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from "react-icons/io";

const Card = (props) => {
  const [state, setstate] = useState(false);
  // false means  ans is hidden
  // true means ans is show
  const onchangestate = () => {
    setstate(!state);
  };
  return (
    <>
      <div className="row col-10  m-auto mb-3">
        <div className="col-2 mx-auto">
          <IconContext.Provider value={{ color: "black", size: "2.325em" }}>
            {props.icon}
          </IconContext.Provider>
        </div>
        <div className="row col-8  mxauto text-formatted">{props.heading}</div>
        <div className="col-2  mx-auto">
          <IconContext.Provider value={{ color: "#C55FFC", size: "2.325em" }}>
            {state ? (
              <IoMdArrowDropupCircle onClick={onchangestate} />
            ) : (
              <IoMdArrowDropdownCircle onClick={onchangestate} />
            )}
          </IconContext.Provider>
        </div>
      </div>
      {state ? (
        <div className="row col-9 m-auto bg-color  text-formatted-ans">
          {props.description}
        </div>
      ) : null}
      <div className="row col-10 m-auto border-style mb-4"></div>
    </>
  );
};
export default Card;
