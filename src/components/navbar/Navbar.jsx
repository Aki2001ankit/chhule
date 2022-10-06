import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

import homeIcon from "./home.svg";
import blogIcon from "./Blogs.svg";
import newfeature_s from "./newfeature.svg";
import indianMarvelsIcon from "./indianMarvels.svg";
import nearestCentersIcon from "./nearestCenters.svg";
import aboutUsIcon from "./aboutUs.svg";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = (props) => {
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
      <div className="navWrapper sticky-top">
        <div className="logo">
          <img
            className="largerwidth-logo"
            src={props.logo}
            height="57px"
            alt="logo"
            onClick={() => navigate("/")}
          />
          <img
            className="smallerwidth-logo"
            src={props.logo_m}
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
          <NavLink
            exact
            activeclassName="active"
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#C55FFC" : "white",
            })}
          >
            <img src={homeIcon} height="24px" alt="blogIcon" />
            Home
          </NavLink>
          <NavLink
            to="/blogs"
            style={({ isActive }) => ({
              color: isActive ? "#C55FFC" : "white",
            })}
          >
            <img src={blogIcon} height="24px" alt="blogIcon" />
            Blogs
          </NavLink>
          <NavLink
            to="/indianmarvels"
            style={({ isActive }) => ({
              color: isActive ? "#C55FFC" : "white",
            })}
          >
            <img
              src={indianMarvelsIcon}
              height="24px"
              alt="indianMarvelsIcon"
            />
            Indian Marvels
          </NavLink>
          <NavLink
            to="/nearestcentres"
            style={({ isActive }) => ({
              color: isActive ? "#C55FFC" : "white",
            })}
          >
            <img
              src={nearestCentersIcon}
              height="24px"
              alt="nearestCentersIcon"
            />{" "}
            Nearest Centres
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
