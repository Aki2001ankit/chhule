import React from "react";
import Item from "./Item3";
const Card3 = (props) => {
  return (
    <>
      <div className="mb-1">
        <Item>
          <div>
            <img
              src={props.imgurl3}
              alt="glimpses"
              className="glimpses-image"
            />
          </div>
        </Item>
      </div>
    </>
  );
};
export default Card3;
