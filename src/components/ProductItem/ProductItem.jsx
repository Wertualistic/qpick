import React from "react";
import { useNavigate } from "react-router-dom";

function ProductItem(props) {
  const { title, image, price, rating, id } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/singleproduct/${id}`);
  };

  return (
    <div
      className="card flex flex-col justify-center items-center p-5 cursor-pointer w-[450px] h-[507px] bg-white rounded-[30px] shadow-xl"
      onClick={handleClick}
    >
      <img src={image} alt="" className="w-[280px] h-[300px]" />
      <div className="flex flex-col justify-center items-start w-full">
        <div className="w-full flex items-center justify-between mt-10">
          <h4 className="text-[#1C1C27] text-[24px] font-[600]">
            {title.slice(0, 20)}
          </h4>
          <h4 className="text-[#FFA542] text-[24px] font-[600]">{price}₸</h4>
        </div>
        <div className="rating flex items-start mt-10">
          <div className="flex items-center justify-center">
            <i className="ri-star-fill text-[30px] text-[#FFCE7F]" />
            <span className="text-[#838383] text-[24px] font-[600]">
              {rating.rate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
