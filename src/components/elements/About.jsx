import React from 'react'
import './about.css'

const About = () => {
  return (
    <>
   <div className="container A-section">
    <div className="row">
        <div className="col-md-6 ">
          <span className='badge  mb-3 '>About us</span>
            <div className="h2 font-weight-bold">
            A human-focused technology and innovation business
             expanding blockchain technologies for a brighter tomorrow.             
            </div>
           <p>Deeply connected to and driven by our award winning community
            (The SafeMoon Army), we are innovating for good. Building blockchain, commerce,
             metaverse and NFT products to derive new kinds of value from crypto technology 
             and to apply it to increasingly better use. <br /><br />
             We are now addressing the second part of our mission – the expansion and channeling
              of our technology to propel new innovations for good, and a Venture Philanthropy 
              model to advance those innovations to every part of the world.
             </p>
        </div>
        <div className="col-md-6 ">
            <div className="">
                <img   className='second-image text-center' src="https://safemoon.com/img/V6.jpg" alt="" />
            </div>

        </div>
    </div>
   </div>
    </>
  )
}

export default About