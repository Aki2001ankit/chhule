import React from "react";
import Navbar from "../../components/navbar/Navbar";
import logo from "../../components/navbar/logo_blacktext.svg";
import logo_m from "../../components/navbar/logo_bt_m.svg";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import BlogCard from './blogCards'
import "./blog.css";
import Blogdata from './blogdata'
const Blogs = () => {
  const Nblogcards =(val)=>{
return(<>
  <BlogCard
    url1={val.url1}
    title1={val.title1}
    desc1={val.desc1}
    title2={val.title2}
    desc2={val.desc2}
    url2={val.url2}
  />
</>)
  }
  return (
    <>
      <div className="temp-navbar_wrapper ">
        <Navbar logo={logo} logo_m={logo_m} />
      </div>
      <div className="search-bar row pb-2">
        <form action="" className="search">
          <div className="row set-border  m-0 p-0 ">
            <input
              type="text"
              className="form-style col-9 col-lg-10  "
              name=""
              id=""
              placeholder="Search for more blogs"
            />
            <button type="submit" className="col-3 col-lg-2  btn-height ">
              <IconContext.Provider value={{ color: "white", size: "2em" }}>
                <IoSearchCircleSharp />
              </IconContext.Provider>
            </button>
          </div>
        </form>
      </div>
      {Blogdata.map(Nblogcards)};


    </>
  );
};

export default Blogs;
