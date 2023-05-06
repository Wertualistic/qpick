import React from "react";
import ProductList from "../ProductList/ProductList";

function Main({ selectedCategory }) {
  return <div className='main'>
        <ProductList selectedCategory={selectedCategory} />
  </div>
}

export default Main;
