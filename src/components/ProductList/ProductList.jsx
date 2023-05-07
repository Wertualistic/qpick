import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";

function ProductList({ selectedCategory, onLikeButtonClick, onRemoveFromSelected, likedProducts }) {
  const [products, setProducts] = useState([]);

  const filterData = (data) => {
    let filteredData = data;

    if (selectedCategory) {
      filteredData = filteredData.filter(
        (item) => item.category === selectedCategory
      );
    }

    return filteredData;
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = filterData(data);
        setProducts(filteredData);
      })
      .catch((error) => console.error(error));
  }, [selectedCategory]);

  const category = products.length > 0 ? (products.length > 10 ? "All" : products[0].category) : "";

  return (
    <>
      <span className="capitalize text-[#838383] text-[24px]">{category}</span>
      <div className="grid grid-cols-3 gap-[50px] justify-center items-center mb-16 mt-10">
        {products.map((product) => (
          <ProductItem
            {...product}
            likedProducts={likedProducts}
            key={product.id}
            product={product}
            onLikeButtonClick={onLikeButtonClick}
            onRemoveFromSelected={onRemoveFromSelected}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;
