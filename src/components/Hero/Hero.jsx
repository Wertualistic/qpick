import React from "react";
import iphone from '../../../public/assets/images/iphone.png';

function Hero() {
  return (
    <div className="flex bg-[#101010] w-full h-[226px] rounded-[30px] mb-[44px] justify-center items-center shadow-lg">
      <h1 className="w-[643px] text-white text-[40px] font-[600] text-center">Аксессуары для <br /> Iphone 13 Pro Max</h1>
      <img src={iphone} alt="" />
    </div>
  );
}

export default Hero;
