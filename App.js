//Parent component App with login/logout
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home.js";
import Products from "../../pages/Products/Products.js";
import About from "../../pages/About/About.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <Products totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
            }
          />
          <Route path="/about" element={<About total={totalPrice} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
