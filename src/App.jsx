import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import SinglePage from "./components/SinglePage/SinglePage";
import ServiceReq from "./components/ServiceReq/ServiceReq";
import Contacts from "./components/Contacts/Contacts";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    navigate("/products");
  }, []);
  return (
    <div className="flex justify-center bg-[#EAEAEA]">
      <div className="w-full container">
        <Navbar handleCategoryChange={handleCategoryChange} />
        {location.pathname === "/products" ? <Hero /> : null}
        <Routes>
          <Route
            path="/products"
            element={<Main selectedCategory={selectedCategory} />}
          />
          <Route path="/singleproduct/:id" element={<SinglePage />} />
          <Route path="/service-requirements" element={<ServiceReq />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
