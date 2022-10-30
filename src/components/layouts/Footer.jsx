import React from "react";
import "./footer.css";
import { FaDiscord , FaFacebookSquare , FaTwitter ,FaInstagram ,FaYoutube,FaReddit ,FaSun} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container footer-section">
        <div className="row f-top-section">
          <div className="col-md-6 about-web">
            <div className="f-logo pe-2 " >
              <img
                className="footer-img "
                src="https://safemoon.com/_next/image?url=%2Fimg%2Flogo.png&w=96&q=75"
                alt=""
              />
            </div>
            <div>
              <h4> SafeMoon - Innovating for Good</h4>
              <p>               
                Building blockchain, commerce, metaverse and NFT products to
                derive new kinds of value from crypto technology and to apply it
                to increasingly better use. Advancing our innovations to every
                part of the world.
              </p>
              <p>
                <span className="pe-2"> <FaDiscord  className="" size='2rem' /> </span>
                <span className="pe-2" > < FaTwitter size='2rem' /></span>
                <span className="pe-2"><FaFacebookSquare size='2rem' /></span>
                <span className="pe-2">  <FaInstagram   size='2rem' /></span>
                <span className="pe-2"> <FaYoutube size='2rem' /></span>
                <span className="pe-2"> <FaReddit  size='2rem' /></span>                                                
              </p>
            </div>            
          </div>
          {/* end */}
          
          <div className="col-md-3  ">
            <ul className="list-unstyled right-list " >
              <li>Wallet Tracker</li>
              <li>Branding</li>
              <li>White Paper</li>
              <li>Contract</li>
              <li>Status</li>
              <li>SafeMoon Card</li>
            </ul>
          </div>
          <div className="col-md-3 ">
          <ul className="list-unstyled right-list">
            <li>Support</li>
            <li>List a Token</li>
            <li>Careers</li>
            <li>Education </li>
            <li>Wallpaper</li>
          </ul>
          </div>
        </div>
        {/* end */}
        <div   className="container" >
        <div className="row">
            <div className="col">
              <p className="text-center">
                <span className="pe-4">Terms of Use</span>
                <span className="pe-4" >Privacy policy</span>
                <span className="pe-4">cookies policy</span>
                <span className="pe-4">wallet EULA</span>
                <span className="pe-4">Waller Privacy</span>
                <span className="pe-4">disclaimer</span>
                <span className="pe-4">FAQ</span>
                <span className="pe-4">Our Patners</span>                
              </p>
              <p className="text-center">  Copyright © 2022 SafeMoon US LLC | All Rights Reserved.<FaSun /></p>
            </div>
            </div>
        </div>
      
      </div>
    </>
  );
};

export default Footer;
