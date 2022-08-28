import React from "react";
import "./Footer.css";
import {
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <>
      <div className="footer bg-dark">
        <div className="contact-us">CONTACT US</div>
        <IconContext.Provider value={{ color: "#fff", size: "3.125em" }}>
          <div className="flex-container ">
            <div className="social-media_icon">
              <a href="https://wa.me/8920529523">
                <FaWhatsapp />
              </a>
            </div>

            <div className="social-media_icon ">
              <a href="https://twitter.com/">
                <FaTwitter />
              </a>
            </div>
            <div className="social-media_icon  ">
              <a href="https://www.facebook.com/">
                <FaFacebook />
              </a>
            </div>
            <div className="social-media_icon  ">
              <a href="https://www.instagram.com/">
                <FaInstagram />
              </a>
            </div>
            <div className="social-media_icon ">
              <a href="https://www.linkedin.com/">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </IconContext.Provider>

        <div className="address">Office Address</div>
      </div>
    </>
  );
};

export default Footer;
