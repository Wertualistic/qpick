import React from "react";
import ProductList from "../ProductList/ProductList";

function Main({ selectedCategory, onLikeButtonClick, onRemoveFromSelected, likedProducts }) {
  return (
    <div className="main">
      <ProductList
        selectedCategory={selectedCategory}
        likedProducts={likedProducts}
        onLikeButtonClick={onLikeButtonClick}
        onRemoveFromSelected={onRemoveFromSelected}
      />
    </div>
  );
}

export default Main;
