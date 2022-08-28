import React from "react";
import Item from "./Item1";
const Card1 = (props) => {
  return (
    <>
      <div className="mt-1">
        <Item>
          <div>
            <img
              src={props.imgurl1}
              alt="glimpses"
              className="glimpses-image"
            />
          </div>
        </Item>
      </div>
    </>
  );
};
export default Card1;
