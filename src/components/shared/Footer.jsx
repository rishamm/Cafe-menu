import React from "react";
import logo from '../../assets/header/logo1.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";


function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-5">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <div className="footer-logo">
            <img src={logo} alt="Coffee Shop Logo" className="w-40 h-[85%] object-cover mb-2" />
          </div>
          <div className="footer-info text-left md:ml-10">
            <p>Visit us at:</p>
            <address className="not-italic">
              123 Coffee Street
              <br />
              Cityville, CO 12345
            </address>
            <p>
              Contact us: <a href="tel:+1234567890">(123) 456-7890</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:info@coffeeshop.com">info@coffeeshop.com</a>
            </p>
          </div>
          <div className="social-media mt-4 md:mt-0">
            <a href="#" className="text-white text-2xl mx-2">
              <i><AiOutlineFacebook /></i>
            </a>
            <a href="#" className="text-white text-2xl mx-2">
            <FaInstagram />
            </a>
            <a href="#" className="text-white text-2xl mx-2">
            <FaXTwitter />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
