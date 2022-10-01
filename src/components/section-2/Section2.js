import React, { useState } from "react";
import Imagesection from "./imagesection";
import Carousel,{ consts }  from "react-elastic-carousel";
import { IconContext } from "react-icons";
import { TiMediaPlay,TiMediaPlayReverse } from "react-icons/ti";
import RouteData from "./differentroutedata";
import "./section2.css";
import Card from "./card";
const Section2 = () => {
  let [imageindex, setimageindex] = useState(0);
  const image = RouteData[imageindex];

  const Ncard = (val) => {
    return <Card label={val.label} route={val.route} details={val.details} />;
  };
  
  const myArrow =({ type, onClick, isEdge })=>{
    const pointer = type === consts.PREV ? <TiMediaPlayReverse/> : <TiMediaPlay/>
      return (
        <button type="button"  onClick={onClick} disabled={isEdge} className="btn btn-sm  rounded-circle btn-style-b">
         <IconContext.Provider value={{ color: "#fff", size: "1.75em" }}>
         
         {pointer}
         </IconContext.Provider>
         
        </button>
      )

  }
  return (
    <div className="row">
      <Imagesection imgurl={image.imgPath} title={image.label} />

      <div className="col-12 col-md-5 m-auto pt-5 ">
        <h1 className="text-center explore-india col-9 m-auto pb-2">
          EXPLORE INCREDIBLE INDIA!
        </h1>
        <Carousel
          className="mb-2 mt-2"
          pagination={true}
          onNextStart={() => {
            setimageindex(imageindex + 1);
          }}
          onPrevStart={() => {
            setimageindex(imageindex - 1);
          }}
          renderArrow={myArrow}
        >
          {RouteData.map(Ncard)}
        </Carousel>
      </div>
      <div className="bg-border-bottom">

      </div>
     
    </div>
  );
};

export default Section2;
