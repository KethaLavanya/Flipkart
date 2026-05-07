import React from "react";
import myImage from "../assets/images/JBL Headphones.jpg";
import myImageImage from "../assets/images/mens products.jpg";
import myImageBlock from "../assets/images/Bridal Saree 2025.jpg";
import myImageData from "../assets/images/kidswear.jpg";
import myImageStore from "../assets/images/skin care .jpg";
const Products = () => {
  return (
    <>
      <div className="imageDocument">
        <div className="imageColor">
          <div className="imageDiv">
            <img src={myImageImage} alt="" />
            <p className="dealsBlock">Top Deals</p>
            <p className="offerBlock">Upto 25%</p>
          </div>
          <div className="imageDiv">
            <img src={myImageBlock} alt="" />
            <p className="dealsBlock">Widest Range</p>
            <p className="offerBlock">Top Rated</p>
          </div>

          <div className="imageDiv">
            <img src={myImageData} alt="" />
            <p className="dealsBlock">Special Offers</p>
            <p className="offerBlock">Min. 80% OFF</p>
          </div>
          <div className="imageDiv">
            <img src={myImage} alt="" />
            <p className="dealsBlock">Limited Time Deal</p>
            <p className="offerBlock">Flat 80% OFF</p>
          </div>
          <div className="imageDiv">
            <img src={myImageStore} alt="" />
            <p className="dealsBlock">Trusted Body Care</p>
            <p className="offerBlock">Up to 50% OFF</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
