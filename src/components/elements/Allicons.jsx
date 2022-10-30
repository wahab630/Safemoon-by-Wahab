import React from "react";
import "./allicons.css";

const Allicons = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col d-flex flex-column align-items-center justify-content-center flex-lg-row">
            <div className="d-flex align-items-center">
            <div className=" flex-fill p-1">
           
              <img
                className="allicon-images"
                src="https://safemoon.com/_next/image?url=%2Fimg%2Fbrands%2Fbscscan.png&w=256&q=75"
                alt=""
              />
            </div>
            <div className="p-1 flex-fill">
          
              <img
                className="allicon-images"
                src="https://safemoon.com/_next/image?url=%2Fimg%2Fbrands%2Fcertik.png&w=256&q=75"
                alt=""
              />
            </div>
            <div className="p-1 flex-fill">
              {" "}
              <img
                className="allicon-images"
                src="https://safemoon.com/_next/image?url=%2Fimg%2Fbrands%2Fnomics.png&w=256&q=75"
                alt=""
              />{" "}
            </div>
            </div>
            <div className="d-flex align-items-center">
            <div className="p-1 flex-fill">
              {" "}
              <img
                className="allicon-images"
                src="https://safemoon.com/_next/image?url=%2Fimg%2Fbrands%2Fcoinmarket.png&w=256&q=75"
                alt=""
              />{" "}
            </div>
            <div className="p-1 flex-fill">
              {" "}
              <img
                className="allicon-images"
                src="https://safemoon.com/_next/image?url=%2Fimg%2Fbrands%2Fcoingecko.png&w=256&q=75"
                alt=""
              />{" "}
            </div>
            <div className="p-1 flex-fill">
              {" "}
              <img
                className="allicon-images"
                src="https://safemoon.com/_next/image?url=%2Fimg%2Fbrands%2Fwatcher.png&w=256&q=75"
                alt=""
              />{" "}
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allicons;
