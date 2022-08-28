import React from "react";

const Imagesection = (props) => {
  return (
    <>
      <div className="d-flex col-12 col-md-7  container1 m-auto p-0">
        <img className="image" src={props.imgurl} alt="Snow" />

        <div className="text-centered-over-image">
          <h4>{props.title}</h4>
        </div>
      </div>
    </>
  );
};
export default Imagesection;
