import React from "react";
import logo from "../../../public/assets/images/logo.svg";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";

function Navbar({ handleCategoryChange, likedProducts }) {
  return (
    <div className="flex justify-between items-center p-[20px]">
      <Link className="logo" to='/products'>
        <img src={logo} alt="" width="130" />
      </Link>
      <div className="group flex justify-between items-center w-[85%]">
        <div className="select flex gap-3 items-center">
          <label>
            <i className="ri-smartphone-line text-[26px] text-[#838383]" />
          </label>
          <select onChange={handleCategoryChange} className="cursor-pointer">
            <option key="" value="">
              All categories
            </option>
            <option key="men" value="men's clothing">
              Men's Clothing
            </option>
            <option key="women" value="women's clothing">
              Women's Clothing
            </option>
            <option key="electronics" value="electronics">
              Electronics
            </option>
            <option key="jewelry" value="jewelery">
              Jewelery
            </option>
          </select>
        </div>
        <div className="flex gap-5">
          <Link to='/selected' className="relative">
            <i className="ri-heart-line text-[26px] text-[#838383]" />{" "}
            <span className="badge absolute top-0 right-[-7px] text-[15px] text-[white] bg-[#FFA542] rounded-full flex justify-center items-center w-[18px] h-[18px]">
              {likedProducts.length}
            </span>
          </Link>
          <button className="relative">
            <i className="ri-shopping-cart-line text-[26px] text-[#838383]" />{" "}
            <span className="badge absolute top-0 right-[-7px] text-[15px] text-[white] bg-[#FFA542] rounded-full flex justify-center items-center w-[18px] h-[18px]">
              1
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
