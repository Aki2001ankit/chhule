import React from "react";
import { IconContext } from "react-icons";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import vechile1 from "../../assets/icons/jaipurBlogPic/vechile1.svg";
import vechile2 from "../../assets/icons/jaipurBlogPic/vechile2.png";
import vechile3 from "../../assets/icons/jaipurBlogPic/vechile3.png";
import place1 from "../../assets/icons/jaipurBlogPic/place1_chowkidhani.png";

const Card = () => {
  return (
    <>
      <div className="row mx-auto">
        <div className="col-12 col-sm-8 col-md-5  mx-auto mb-3 bg-and-border">
          <div className="row">
            <div className="col-4  m-0 p-0 m-auto">
              <img src={place1} alt="place1" className="img-fluid" />
            </div>
            <div className="col-8  m-0 m-auto ">
              <p className="full-desc-card-title mt-1">1. CHOWKI DHANI</p>
              <p className="full-desc-para">
                Experience the Rajasthani culture with locals and enjoy the
                amazing food
              </p>
              <button className="full-desc-rate-button mb-1">Rs 900</button>
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className="col-12 col-sm-8 col-md-5  mx-auto mb-3 bg-and-border">
          <div className="row">
            <div className="col-4  m-0 p-0 m-auto">
              <img src={place1} alt="place1" className="img-fluid" />
            </div>
            <div className="col-8  m-0 m-auto ">
              <p className="full-desc-card-title mt-1">1. CHOWKI DHANI</p>
              <p className="full-desc-para">
                Experience the Rajasthani culture with locals and enjoy the
                amazing food
              </p>
              <button className="full-desc-rate-button mb-1">Rs 900</button>
            </div>
          </div>
        </div>
        {/* 3rd */}
      
      </div>
    </>
  );
};

const FullDescBlog = () => {
  return (
    <>
      <div className="row mt-2">
        <div className="col-2">
          <IconContext.Provider
            value={{ color: "rgba(197, 95, 252, 0.6)", size: "2.5em" }}
          >
            <BsFillArrowLeftCircleFill />
          </IconContext.Provider>
        </div>
        <div className="col-10 col-md-8 text-center">
          <button className="how-button-in-des-blog">How</button>
          <button className="explore-button-in-des-blog">Explore</button>
        </div>
        <div className="col-md-2 "></div>
      </div>

      {/* title */}
      <div className="row">
        <div className="col-12 col-md-8 ">
          <p className="full-desc-title m-3 px-4 mb-2">
            THINGS TO DO IN JAIPUR
          </p>
          <p className="full-desc-subtitle1 mx-3 px-4">
            REACHING TO YOUR DESTINATION
          </p>
          <p className="mx-3 px-4 mt-2 full-desc-para">
            The price for train from Roorkee to Jaipur is{" "}
            <span className="highlight-number-url">Rs 750-850</span> depending
            upon date and availablity in 3rd Ac, but if we took train we need to
            take some other mode to tavel around jaipur.
          </p>
          <p className="mx-3 px-4 mt-5 full-desc-para">
            A mini bus or tampo traveller for next 6 days it will cost around:{" "}
            <br />{" "}
            <span className="highlight-number-url">
              https://jaipurdarshan.in/jaipur-full-bus.html
            </span>
            <br />
            AC 10 hrs: Rs. 3600 + GST (7232007704) <br />
            Non Ac 10hr: Rs. 3400 + GST (From Rajasthan Tourism) <br />
            AC 8 hrs: Rs. 3500+ parking or Rs 19/km min (7232007704)
          </p>
          <p className="mx-3 px-4 mt-5 full-desc-para">
            It cost <span className="highlight-number-url">Rs. 900 </span>{" "}
            rupees per person
          </p>
        </div>
        <div className="col-12 col-md-4 m-auto text-center ">
          <img
            src={vechile1}
            alt="vechile1"
            className="m-2 mx-md-5 opacity-80"
          />
          <img
            src={vechile2}
            alt="vechile2"
            className="m-2 mx-md-5 opacity-80"
          />
          <img
            src={vechile3}
            alt="vechile3"
            className="m-2 mx-md-5 opacity-80"
          />
        </div>
      </div>

      {/* 3rd */}
      <div className="row">
        <div className="col-12 full-desc-subtitle1  mx-3 mt-5 px-4">
          PLACES TO GO
        </div>
        <Card />
      </div>
    </>
  );
};
export default FullDescBlog;
/* image 4 */
