import React from 'react'
import './hero.css'
import Typed from "react-typed";
import { FaCopy } from "react-icons/fa";


const Hero = () => {
  return (
    <>
    <div className=" welcome-image">
      <div className='bgvideo'>
      <video
              className="hero-vid"
              src="assets/rocketvideo.mp4"
              autoPlay
              muted
              loop
            />

<div className="container hero-con ">
        <div className="row welcome-section">
          <div className="col-6 left-column">
            <div className="div-one">
              <p className='mb-1'>WELCOME TO </p>
              <Typed
                className="h1 fw-bold"
                strings={["SAFEMOON"]}
                typeSpeed={150}
                backSpeed={100}
                loop
              />
              <p>Community-driven Innovation for Good</p>
            </div>
            <div className="div-two">
              <button className="Button-one ">
                Consolidate to V2 SafeMoon!
              </button>
              <span className="fw-bold pe-3 h5">
                 Buy V2
              </span>
              <span  className="fw-bold  h5">
                Swap
              </span>
              <br />
              <span  className="fw-bold h5">
                Live Chart
              </span>
            </div>
            <div>
              <p>SafeMoon (SFM) V2 Contract:</p>
              <p>
                <button className='  Button-one' >0x42981d0bf...b9092fcB5 <FaCopy/></button>
               </p>
            </div>
          </div>
          <div className="col-6 right-column">
            <p className='text-center'>
              Out Now: <br />
             <div className="h4"> SafeMoon Wallet </div>  
              Get it on:
            </p>
            <div className="hero-images text-center">
              <img className='image-1 me-2'
                src="https://safemoon.com/_next/image?url=%2Fimg%2Fgoogle_play.png&w=256&q=75"
                alt=""
              />
              <img  className='image-1'
              src="https://safemoon.com/_next/image?url=%2Fimg%2Fapp_store.png&w=256&q=75" alt="" />
            </div>
          </div>
        </div>
      </div>

      </div>
     
      </div>
    </>
  )
}

export default Hero