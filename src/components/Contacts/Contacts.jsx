import React from "react";
import vk from "../../../public/assets/images/VK.svg";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <>
      <div className="main">
        <div className="flex justify-center items-start">
          <div className="flex flex-col">
            <div className="flex flex-col bg-white rounded-[30px] shadow-2xl p-[20px]">
              <h2 className="text-[#1C1C27] text-[20px] font-[600] pb-[20px]">
                Наш офис
              </h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.1705971189217!2d69.24217476656725!3d41.30563283024984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bf3870c714d%3A0x6ddece20c220333b!2sMagic%20city!5e0!3m2!1suz!2s!4v1683397639177!5m2!1suz!2s"
                width="722"
                height="424"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="rounded-[10px]"
              />
              <div className="flex items-center py-[17px]">
                <i className="ri-map-pin-2-line text-[27px]"></i>
                <div className="flex flex-col">
                  <p className="font-[500] text-[17px]">
                    Аксай-3а, 62ф, Алматы, Казахстан
                  </p>
                  <p className="text-[#838383] font-[500] text-[15px]">
                    3 этаж 35 кабинет
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px] items-center pt-[44px]">
              <i className="ri-phone-fill text-[45px]"></i>
              <p className="text-[30px] font-[600]">+7 777 777 77 77</p>
            </div>
          </div>
          <ul className="flex flex-col gap-[18px] justify-center items-start ml-[120px]">
            <li className="p-[30px] bg-white shadow-xl rounded-[30px] w-[120px] h-[120px] flex justify-center items-center">
            <Link to="https://vk.com">
              <img src={vk} alt="" className="mt-2" width="60px" />
              </Link >
            </li>
            <li className="p-[30px] bg-white shadow-xl rounded-[30px] w-[120px] h-[120px] flex justify-center items-center">
              <Link to="https://instagram.com/coderalii">
                <i className="ri-instagram-line text-[60px]"></i>
              </Link>
            </li>
            <li className="p-[30px] bg-white shadow-xl rounded-[30px] w-[120px] h-[120px] flex justify-center items-center">
              <Link to="https://t.me/coderali_1">
                <i className="ri-telegram-line text-[60px]"></i>
              </Link>
            </li>
            <li className="p-[30px] bg-white shadow-xl rounded-[30px] w-[120px] h-[120px] flex justify-center items-center">
            <Link to="https://whatsapp.com">
              <i className="ri-whatsapp-line text-[60px]"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contacts;
