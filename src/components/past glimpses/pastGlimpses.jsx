import React from "react";
import Carousel from "react-elastic-carousel";
import "./past.css";
import Imagedata from "./imagedata";

import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";
import Itemmain from "./Itemmain";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },

  { width: 850, itemsToShow: 2, itemsToScroll: 2 },
  { width: 1150, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1450, itemsToShow: 4, itemsToScroll: 4 },
  { width: 1750, itemsToShow: 5, itemsToScroll: 5 },
];

const Glimpses = () => {
  const Ncard = (val) => {
    return (
      <>
        <Itemmain>
          <div className="col-6  m-0 p-0">
            <Card1 imgurl1={val.imgpath1} />
          </div>
          <div className="col-6 m-0 p-0">
            <Card2 imgurl2={val.imgpath2} imgurl3={val.imgpath3} />
            <Card3 imgurl2={val.imgpath2} imgurl3={val.imgpath3} />
          </div>
        </Itemmain>
      </>
    );
  };
  return (
    <div className=" d-block row container col-12 p-0 ">
      <h1 className="text-center past-glimpses-style mt-5 mb-4">
        PAST GLIMPSES
      </h1>
      <Carousel className="mb-5" breakPoints={breakPoints} pagination={false}>
        {Imagedata.map(Ncard)}
      </Carousel>
    </div>
  );
};
export default Glimpses;
