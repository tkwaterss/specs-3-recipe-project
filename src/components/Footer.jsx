import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-social-container">
        <h5>Hit us up on our socials!</h5>
        <div className="footer-social-icons">
          <div className="footer-social-icon">
            <a href="https://www.devmountain.com" target="_blank">
              <FaFacebookF size="1.3em" color="#3f3f3f" />
            </a>
          </div>
          <div className="footer-social-icon">
            <a href="https://www.devmountain.com" target="_blank">
              <FaInstagram size="1.3em" color="#3f3f3f" />
            </a>
          </div>
          <div className="footer-social-icon">
            <a href="https://www.devmountain.com" target="_blank">
              <FaPinterestP size="1.3em" color="#3f3f3f" />
            </a>
          </div>
          <div className="footer-social-icon">
            <a href="https://www.devmountain.com" target="_blank">
              <FaTwitter size="1.3em" color="#3f3f3f" />
            </a>
          </div>
        </div>
      </div>
      <svg
        width="110"
        height="110"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="256" cy="256" r="248" stroke="#25AAE1" strokeWidth="16" />
        <path
          d="M255 222L203 132.5L83.9282 338H233L331 168L427.675 338.571L317.5 338.5"
          stroke="#25AAE1"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </footer>
  );
};

export default Footer;


