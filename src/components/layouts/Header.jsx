import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './header.css'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg  sticky-top ">
  <div className="container ">
    <a className="navbar-brand" href="#">  <img className='nav-img' src="https://safemoon.com/_next/image?url=%2Fimg%2Flogo.png&w=96&q=75" alt="" />  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
          <a className="nav-link active " >Home</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active" href="#">Our Team</a>
        </li>
        
        <li className="nav-item ">
          <a className="nav-link active" href="#">Swap</a>
        </li>
        
        <li className="nav-item ">
          <a className="nav-link active" href="#">Products</a>
        </li>
       
        <li className="nav-item ">
          <a className="nav-link active" href="#">Merch</a>
        </li>
        
        <li className="nav-item ">
          <a className="nav-link active" href="#">Patners</a>
        </li>
        
        <li className="nav-item ">
          <a className="nav-link active" href="#">Markets</a>
        </li>
       
        <li className="nav-item ">
          <a className="nav-link active" href="#">How to Buy</a>
        </li>
      </ul>     
    </div>
  </div>
</nav>
    </>
  )
}

export default Header