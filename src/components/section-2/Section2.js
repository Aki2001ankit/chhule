import React, { useState } from "react";
import Imagesection from "./imagesection";
import Carousel from "react-elastic-carousel";
import RouteData from "./differentroutedata";
import './section2.css'
import Card from './card'
const Section2 = () => {
  let [imageindex, setimageindex] = useState(0);
  const image = RouteData[imageindex];
 
  const Ncard =(val)=>{
    return(
      <Card
        label={val.label}
        route={val.route}
        details={val.details}
      />
    )
  }
  return (
    <div className="row">
      <Imagesection imgurl={image.imgPath} title={image.label} />

      <div className="col-12 col-md-5 m-auto pt-5 ">
      <h1 className="text-center explore-india col-9 m-auto pb-2">EXPLORE
 INCREDIBLE INDIA!</h1>
        <Carousel
          className="mb-2 mt-2"
          pagination={true}
          onNextStart={() => {
            
            setimageindex(imageindex + 1);
           
          }}
          onPrevStart={() => {
            setimageindex(imageindex - 1);
      
          }}
        >
        
         
         {RouteData.map(Ncard)}
          
        </Carousel>
      </div>
    </div>
 
  );
};

export default Section2;
