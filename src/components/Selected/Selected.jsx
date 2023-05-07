import React from "react";
import SelectedItem from "../SelectedItem/SelectedItem";

function Selected({ likedProducts, onLikeButtonClick, onRemoveFromSelected }) {
  return (
    <div className="main">
      <span className="capitalize text-[24px] font-[600]">Избранное</span>
      <div className="grid grid-cols-3 gap-[50px] justify-center items-center mb-16 mt-10">
        {likedProducts.length === 0 ? (
          <h1 className="text-[40px]">Hech narsa yoq!</h1>
        ) : (
          likedProducts.map((product) => (
            <SelectedItem
              {...product}
              likedProducts={likedProducts}
              key={product.id}
              product={product}
              onLikeButtonClick={onLikeButtonClick}
              onRemoveFromSelected={onRemoveFromSelected}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Selected;
