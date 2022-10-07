import React,{useState} from "react";
import Navbar from "../../components/navbar/Navbar";
import logo from "../../components/navbar/logo_blacktext.svg";
import logo_m from "../../components/navbar/logo_bt_m.svg";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import RightBlogCard from './rightblogCardsmall'
import LeftBlogCard from "./leftblogCardsmall";
import "./blog.css";
import Blogdata from './blogdata'
import FullDescBlog from "./fulldescBlog";
const Blogs = () => {

  const [state, setstate] = useState(false)
  const Nblogcards =(val,key)=>{
    console.log(key)
return(<>
{key%2==0?
  <RightBlogCard
    url1={val.url1}
    title1={val.title1}
    desc1={val.desc1}
    path={val.path}
    state={state}
    
  />
  :
  <LeftBlogCard
    url1={val.url1}
    title1={val.title1}
    desc1={val.desc1}
    state={state}
    
  />
}
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
     <FullDescBlog/>


    </>
  );
};

export default Blogs;
