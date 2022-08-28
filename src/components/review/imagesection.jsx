import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./review.css";
const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 3, itemsToScroll: 2 },
  { width: 1750, itemsToShow: 4, itemsToScroll: 2 },
];
const Imagesection = () => {
  const array = [
    { id: 1, title: "item #1" },
    { id: 2, title: "item #2" },
    { id: 3, title: "item #3" },
    { id: 4, title: "item #4" },
    { id: 5, title: "item #5" },
  ];

  return (
    <>
      <div className="d-flex col-12 col-md-7 container1 m-0 p-0 bg-theme-color">
        <div className="col-12 text-center imgadr align-items-center justify-content-center">
          <h1 className="review mt-5 mb-5">REVIEWS</h1>

          <Carousel
            className="mb-5"
            breakPoints={breakPoints}
            pagination={false}
          >
            {array.map((item) => (
              <Item key={item.id}>{item.title}</Item>
            ))}
            <Item>
              <h1 className="pt-5">one</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                dolores ex, repudiandae ipsum eligendi illo.
              </p>
              <h1>name</h1>
            </Item>
            <Item>
              <h1 className="pt-5">two</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                dolores ex, repudiandae ipsum eligendi illo.
              </p>
              <h1>name</h1>
            </Item>
            <Item>
              <h1 className="pt-5">three</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                dolores ex, repudiandae ipsum eligendi illo.
              </p>
              <h1>three</h1>
            </Item>
            <Item>
              <h1 className="pt-5">four</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                dolores ex, repudiandae ipsum eligendi illo.
              </p>
              <h1>name</h1>
            </Item>
            <Item>
              <h1 className="pt-5">five</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                dolores ex, repudiandae ipsum eligendi illo.
              </p>
              <h1>name</h1>
            </Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};
export default Imagesection;
