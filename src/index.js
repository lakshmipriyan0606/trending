import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import ProductDetail from "./component/product/ProductDetail";
import CartList from "./component/CartList";
import About from "./component/About";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import MainProduct from "./component/product/MainProduct";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}/>       
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="/product" element={<MainProduct/>} />
          <Route path="/cart/:id" element={<CartList/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
);
