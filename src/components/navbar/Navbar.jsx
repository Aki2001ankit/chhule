import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.svg";
import logo_m from "./logo_m.svg";
import homeIcon from "./home.svg";
import blogIcon from "./Blogs.svg";
import newfeature_s from './newfeature.svg'
import indianMarvelsIcon from "./indianMarvels.svg";
import nearestCentersIcon from "./nearestCenters.svg";
import aboutUsIcon from "./aboutUs.svg";
import MenuIcon from "@mui/icons-material/Menu";


const Navbar = () => {
  const navigate = useNavigate();
  const openMenu = () => {
    const navWrapper = document.querySelector(".navWrapper");
    const navbar = document.querySelector(".navbar");
    navWrapper.classList.toggle("navWrapper_mb");
    navbar.classList.toggle("navbar_mb");
  };
  return (
    // Position of navbar is absolute so wrap it with a div when use
    <>
      <div className="navWrapper">
        <div className="logo">
          <img
           className="largerwidth-logo"
            src={logo}
            height="57px"
            alt="logo"
            onClick={() => navigate("/")}
          />
          <img
           className="smallerwidth-logo"
            src={logo_m}
            height="57px"
            alt="logo"
            onClick={() => navigate("/")}
          />
         
          <MenuIcon
            className="menuIcon"
            sx={{ fontSize: 40, color: "white" }}
            onClick={openMenu}
          />
        </div>
        <div className="navbar">
          <NavLink to="/">
            <img src={homeIcon} height="24px" alt="homeIcon" />
            Home
          </NavLink>
          <NavLink to="/Blogs">
            <img src={blogIcon} height="24px" alt="blogIcon" />
            Blogs
          </NavLink>
          <NavLink to="/indianmarvels">
            <img
              src={indianMarvelsIcon}
              height="24px"
              alt="indianMarvelsIcon"
            />
            Indian Marvels
          </NavLink>
          <NavLink to="/nearestcentres">
            <img
              src={nearestCentersIcon}
              height="24px"
              alt="nearestCentersIcon"
            />{" "}
            Nearest Centres
          </NavLink>
          <NavLink to="/aboutus">
            <img src={aboutUsIcon} height="24px" alt="aboutUsIcon" />
            About us
          </NavLink>
        
          <img
          
            src={newfeature_s}
            height="57px"
            alt="logo"
            onClick={() => navigate("/aboutUs")}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
