import React from "react";
import logo from "../../../public/assets/images/logo.svg";
import { Link } from "react-router-dom";
import vk from '../../../public/assets/images/VK.svg'

function Footer() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full pt-[30px] bg-white h-[150px] flex justify-around rounded-tl-[30px] rounded-tr-[30px]">
        <div className="logo">
          <img src={logo} alt="logo" width="120" />
        </div>
        <ul className="flex flex-col gap-[10px]">
          <li className="text-[20px] transition-colors hover:text-[#FFA542]">
            <Link to="/selected">Избранное</Link>
          </li>
          <li className="text-[20px] transition-colors hover:text-[#FFA542]">
            <Link to="/cart">Корзина</Link>
          </li>
          <li className="text-[20px] pb-[32px] transition-colors hover:text-[#FFA542]">
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
        <ul className="flex flex-col">
          <li className="text-[20px] transition-colors hover:text-[#FFA542]">
            <Link to="/service-requirements">Условия сервиса</Link>
          </li>
          <div className="flex gap-[15px] items-center mt-[35px]">
            <i className="ri-global-line text-[25px] text-[#838383]"></i>
            <span className="transition-colors hover:text-[#FFA542]">Каз</span>
            <span className="transition-colors hover:text-[#FFA542]">Рус</span>
            <span className="transition-colors hover:text-[#FFA542]">Eng</span>
          </div>
        </ul>
        <ul className="flex gap-[18px] justify-center items-start">
            <li><img src={vk} alt="" className="mt-2"/></li>
            <Link to='https://instagram.com/coderalii' ><i className="ri-instagram-line text-[27px]"></i></Link>
            <Link to='https://t.me/coderali_1' ><i className="ri-telegram-line text-[27px]"></i></Link>
            <li><i className="ri-whatsapp-line text-[27px]"></i></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
