import React from "react";
// import Model from "../component/Model";
import imagePhoto from "../assets/images/flipkart_icon.png";
// import Modelpage from "../pages/Modelpage";
const Header = () => {
  return (
    <>
      <div className="mainBlock">
        <div className="subBlock">
          <div className="photoBlock">
            <img src={imagePhoto} alt="" width={40} />
          </div>
          <div className="shoppingBlock">
            <select name="" id="">
              <option value="">Categories</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <div className="searchBar">
              <input type="search" placeholder="Search products..." />
              <i class="ri-search-line"></i>
            </div>
            {/* <ul>
              <li>
                list
                <ul>
                  <li>hello</li>
                </ul>
              </li>
            </ul> */}
          </div>

          <div className="buttonBtn">
            <button>
              <i class="ri-user-3-line"></i> Login
            </button>

            <button>
              <i class="ri-heart-3-line"></i> Wishlist
            </button>
            <button>
              <i class="ri-shopping-cart-line"></i> Cart
            </button>
          </div>
        </div>
        <div className="navList">
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Today's Deals</li>
            <li>Brands</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
