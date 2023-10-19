// import React, { useState } from "react";
import "./App.css";
// import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

// import { Link } from "react-router-dom";

function App() {
  // const [products, setProducts] = useState([]);
  // const baseURL = "https://api.escuelajs.co/api/v1";
  // const baseURL = "https://fakestoreapi.com";

  // React.useEffect(() => {
  //   axios.get(`${baseURL}/products/1`).then((response) => {
  //     // axios.get(`${baseURL}/products?offset=0&limit=20`).then((response) => {
  //     setProducts(response.data);
  //   });
  // }, []);

  // console.log(products);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Routes>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
