import React from "react";
import Item from "./Item2";
const Card2 = (props) => {
  return (
    <>
      <div className="mb-1">
        <Item>
          <div>
            <img
              src={props.imgurl2}
              alt="glimpses"
              className="glimpses-image"
            />
          </div>
        </Item>
      </div>
    </>
  );
};
export default Card2;
