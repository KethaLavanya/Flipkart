import React from "react";
import myImage from "../assets/images/boatlogo.png";
import myImageOne from "../assets/images/jbllogo.png";
import myImageTwo from "../assets/images/sonylogo.png";
import myImageThree from "../assets/images/noiselogo.png";
import myImageFour from "../assets/images/realmelogo.png";
import myImageFive from "../assets/images/ZEBRONICS-logo-5.webp";
import myImageSix from "../assets/images/pTronlogo.png";
import myImageSeven from "../assets/images/category.png";
const Logo = () => {
  return (
    <>
      <div className="dataBlock">
        <div className="paragraphBlock">
          <p>POPULAR BRANDS</p>
        </div>
        <div className="paragraphBlockOne">
          <p>Top picks from trusted brands</p>
        </div>
        <div className="buttonDataBlock">
          <button>View All Brands</button>
        </div>
      </div>
      <div className="logoBlock">
        <div className="contentBlock">
          <div className="imageDataBlock">
            <img src={myImage} alt="" />
          </div>
          <p className="brandName">boAt</p>
          <p className="brandContent">Plug inti Nirvana</p>
        </div>
        <div className="contentBlock">
          <div className="imageDataBlock">
            <img src={myImageOne} alt="" />
          </div>
          <p className="brandName">JBL</p>
          <p className="brandContent">Hear the Truth</p>
        </div>
        <div className="contentBlock">
          <div className="imageDataBlock">
            <img src={myImageTwo} alt="" />
          </div>
          <p className="brandName">Sony</p>
          <p className="brandContent">Make . Believe</p>
        </div>
        <div className="contentBlock">
          <div className="imageDataBlock">
            <img src={myImageThree} alt="" />
          </div>
          <p className="brandName">Noise</p>
          <p className="brandContent">Sound of Change</p>
        </div>
        <div className="contentBlock">
          <div className="imageDataBlock">
            <img src={myImageFour} alt="" />
          </div>
          <p className="brandName">realme</p>
          <p className="brandContent">Dare to Different</p>
        </div>
        <div className="contentBlock">
          <div className="imageDataBlock">
            <img src={myImageFive} alt="" />
          </div>
          <p className="brandName">Zebronics</p>
          <p className="brandContent">Tech Made Easy </p>
        </div>
        <div className="contentBlock">
          <div className="imageDataBlock">
            <img src={myImageSix} alt="" />
          </div>
          <p className="brandName">pTron</p>
          <p className="brandContent">Power Your Life</p>
        </div>
        <div className="contentBlock">
          <div className="imageDataBlock">
            <img src={myImageSeven} alt="" />
          </div>
          <p className="brandName">More Brands</p>
          <p className="brandContent">Many More</p>
        </div>
      </div>
    </>
  );
};
export default Logo;
