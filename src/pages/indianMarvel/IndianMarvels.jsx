import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import logo from "../../components/navbar/logo_blacktext.svg";
import logo_m from "../../components/navbar/logo_bt_m.svg";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
const IndianMarvels = () => {
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
              placeholder="Search places"
            />
            <button type="submit" className="col-3 col-lg-2  btn-height ">
              <IconContext.Provider value={{ color: "white", size: "2em" }}>
                <IoSearchCircleSharp />
              </IconContext.Provider>
            </button>
          </div>
        </form>
      </div>
      <h1>Indian Marvels</h1>
      <p>Coming soon...</p>
    </>
  )
}

export default IndianMarvels