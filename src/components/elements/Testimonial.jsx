import React from "react";
import "./testimonial.css";
import { FaUsers ,FaWater, FaHandHoldingUsd,FaArrowRight } from "react-icons/fa";


const Testimonial = () => {
  return (
    <>
      <div className="container testimonial-section" >
        <div className="row">
          <div className="col-md-4 col-lg-4 col-sm-12 mb-3 align-items-center d-flex card-1 aos-animate" data-aos="fade-in">
            <div className="about-icon   me-4 ">
              <FaUsers size="3em" />
            </div>
            <div className="">
              <h4 className="fw-bold ">Community Focused</h4>
              <p>
                Community Focused and fair launch. The dev team burned all of
                their tokens and participated with everyone else.
              </p>
              <a className="  fw-bold text-decoration-none">             
                Join Us <FaArrowRight/></a>
            </div>
          </div>


          <div className="col-md-4 col-lg-4 col-sm-12 mb-3 align-items-center card-2 d-flex aos-animate" data-aos="fade-in">
            <div className="about-icon  me-4  " >
              <FaWater   size="3em" />
            </div>
            <div className=" ">
              <h4 className="fw-bold ">Automatic LP</h4>
              <p>
                Every trade contributes towards auto-generating liquidity that
                goes into multiple pools used by exchanges
              </p>
              <a className="fw-bold text-decoration-none">             
              View BscScan  <FaArrowRight/></a>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 mb-3 align-items-center card-3 d-flex aos-animate" data-aos="fade-in">
            <div className="about-icon   me-4 " >
              <FaHandHoldingUsd size="3em" />
            </div>
            <div className="">
              <h4 className="fw-bold ">RFI Static Rewards</h4>
              <p>
                Holders earn passive rewards through static reflection as they
                watch their balance of SafeMoon grow indefinitely.
              </p>
              <a className="fw-bold text-decoration-none ">             
              Check your Wallet <FaArrowRight/></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
