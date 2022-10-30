import React from "react";
import "./token.css";
import { FaCat } from "react-icons/fa";
const token = () => {
  return (
    <>
      <div className="container token-section ">
        <div className="row">
          <div className="col-6 left-section">
          <span className='badge  mb-3 '>The Token</span>
            <div>
              <h4 className=" fw-bold title">
                The SafeMoon Protocol V2 is a community focused DeFi token that
                forms part of the expanding SafeMoon ecosystem.
              </h4>
              <p className="mb-5">
                Four simple functions occur during each trade
              </p>
            </div>
            <div className="bottom-section">
              
              <div className=" d-flex gap-2 aos-animate" data-aos="fade-in">
                <div> 
                  <FaCat  color="aqua" size={33} />
                </div>
                <div>
                <h5 className=" mb-0"> Reflections</h5>       
                <p className=" opacity-50">4% is Redistributed to all existing holders</p>
                </div>
              </div>

              <div className=" d-flex gap-2 aos-animate" data-aos="fade-in">
              <div> 
                  <FaCat  color="aqua" size={33} />
                </div>
                <div>
                <h5 className="mb-0">LP Acquisition</h5> 
                <p className=" opacity-50">3% is added to liquidity </p>
                </div>
              </div>

              <div className=" d-flex gap-2 aos-animate" data-aos="fade-in">
              <div> 
                  <FaCat  color="aqua" size={33} />
                </div>
                <div>
                <h5 className="mb-0">Token Burn</h5> 
                <p className=" opacity-50" >2% of tokens are burned</p>
                </div>
              </div>
              <div  className=" d-flex gap-2 aos-animate" data-aos="fade-in">
              <div> 
                  <FaCat  color="aqua" size={33} />
                </div>
                <div>
                <h5 className="mb-0">Growth Fund</h5> 
                <p className=" opacity-50"> 1% is added to the SafeMoon Ecosystem Growth Fund</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 right-section">
            <div>
              <img className="image-fluid"
                src="https://safemoon.com/_next/image?url=%2Fimg%2Fspaceman-stars.png&w=640&q=75"
                alt="not found"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default token;
