import React from 'react'
import './introducing.css'

const Introducing = () => {
  return (
    <>
    <div className="container-fluid token-bg">
      <div className="container intro-section">
        <div className="row">
            <div className="col-md-6 intro-left  ">
                <div className="para-left ">
                <div className="mb-5">
                <span className='badge  mb-3 '>Introducing</span>
                <h4 className='fw-bold' >The SafeMoon Exchange</h4>
                   <p>The SafeMoon exchange is a revolutionary new idea that 
                    will bring tokenomics to all of crypto on its platform. We call this
                     Cryptonomics.</p>
                </div>
                <button className='btn btn-lg one-button rounded-pill' >Comming Soon</button>
            </div></div>
            <div className="col-md-6">
                     <div className="intro-image aos-animate " data-aos="fade-left" >
                        <img src="https://safemoon.com/_next/image?url=%2Fimg%2Fiphone.png&w=640&q=75" alt="" />
                     </div>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Introducing