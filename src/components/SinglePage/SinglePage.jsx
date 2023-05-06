import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SinglePage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main w-full flex flex-col">
      <span className="capitalize ml-8 text-[#838383] text-[24px]">
        {product.category}
      </span>
      <div className="imgContainer flex flex-col w-full p-[25px] bg-white mt-5 shadow-lg rounded-[30px]">
        <img src={product.image} alt="" width="280" />
        <div className="flex justify-between mt-[30px]">
          <h2 className="text-[#1C1C27] text-[27px] font-[600]">
            {product.title.slice(0, 31)}
          </h2>
          <h2 className="text-[#DF6464] text-[30px] font-[600]">
            {product.price}₸
          </h2>
        </div>
      </div>
      <div className="flex w-full gap-[30px] mt-[25px]">
          <div className="flex flex-col w-[85%] relative ">
              <div className="flex w-full bg-white p-[20px] rounded-[15px] shadow-xl z-10 absolute">
                <h2 className="text-[#1C1C27] text-[27px] font-[600]">Описание и характеристики</h2>
              </div>
              <ul className="flex flex-col w-full bg-[#F9F9F9] p-[20px] rounded-[15px] shadow-xl z-[9] mb-4 pt-24 absolute">
                  <li className="mt-4"><label><b>Description:</b> {product.description}</label></li>
                  <li className="mt-4"><label><b>Rating:</b> {product.rating.rate}</label></li>
                  <li className="mt-4"><label><b>How many were sold?: </b>  {product.rating.count} psc</label></li>
              </ul>
          </div>
          <div className="flex flex-col items-start w-[15%] gap-[30px]">
              <button className="bg-[#101010] shadow-[0px 0px 15px] w-full p-[15px] text-white rounded-[10px] text-[17px] font-[500]">Купить!</button>
              <button className="bg-[#101010] shadow-[0px 0px 15px] w-full p-[12px] text-white rounded-[10px] text-[15px] font-[500]"><i className="ri-shopping-cart-2-line text-[24px]"></i> Добавить в корзину</button>
          </div>
        </div>
    </div>
  );
}

export default SinglePage;