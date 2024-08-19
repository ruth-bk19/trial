import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="footer_Container">
        
        <div class="footer_item1">
        <p>&copy; 2024 CarePii. All rights reserved.</p>
        <a href="www.facebook.com">Privacy Policy</a>
        <a href="www.google.com">Terms of service</a>
        </div>
      <div class="footer_icons">
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
        
        <a href="https://www.instagram.com/">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/?lang=en">
          <FaXTwitter />
        </a>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
        <a href="https://youtube.com">
          <IoLogoYoutube />
        </a>
      </div>
      </div>
     
    </footer>
  );
};

export default Footer;
