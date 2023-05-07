import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SinglePage from "./components/SinglePage/SinglePage.jsx";
import ServiceReq from "./components/ServiceReq/ServiceReq.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Selected from "./components/Selected/Selected.jsx";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [likedProducts, setLikedProducts] = useState([]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    navigate("/products");
  }, []);

  useEffect(() => {
    const likedProductsFromStorage = JSON.parse(localStorage.getItem("likedProducts"));
    if (likedProductsFromStorage) {
      setLikedProducts(likedProductsFromStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
  }, [likedProducts]);

  const onRemoveFromSelected = (productId) => {
    setLikedProducts((prevLikedProducts) =>
      prevLikedProducts.filter((product) => product.id !== productId)
    );
  };

  const handleLikeButtonClick = (product) => {
    if (likedProducts.includes(product.id)) {
      setLikedProducts((prevLikedProducts) =>
        prevLikedProducts.filter((product) => product.id !== product)
      );
    } else {
      setLikedProducts((prevLikedProducts) => [...prevLikedProducts, product]);
      toast.success("Product will be liked!")
    }
  };


  return (
    <>
    <ToastContainer />
      <div className="flex justify-center bg-[#EAEAEA]">
      <div className="w-full container">
        <Navbar handleCategoryChange={handleCategoryChange} likedProducts={likedProducts} />
        {location.pathname === "/products" ? <Hero /> : null}
        <Routes>
          <Route
            path="/products"
            element={
              <Main
                likedProducts={likedProducts}
                selectedCategory={selectedCategory}
                onLikeButtonClick={handleLikeButtonClick}
                onRemoveFromSelected={onRemoveFromSelected}
              />
            }
          />
          <Route path="/singleproduct/:id" element={<SinglePage />} />
          <Route path="/service-requirements" element={<ServiceReq />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="/selected"
            element={<Selected likedProducts={likedProducts} onRemoveFromSelected={onRemoveFromSelected} />}
          />
        </Routes>
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
