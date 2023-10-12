import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);

  const baseURL = "https://api.escuelajs.co/api/v1/products";

  React.useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      // axios.get(`${baseURL}/products?offset=0&limit=20`).then((response) => {
      setProducts(response.data);
    });
  }, []);

  console.log(products);

  return (
    <>
      <h2 className="text-3x underline font-bold ">Hello World</h2>
      <div className="latest-wrapper flex gap-4 flex-wrap py-4 w-11/12 mx-auto">
        {products.map((product) => (
          <div key={product.id}>
            <div>
              <figure className=" w-[300px] bg-[#D4D4D4] hover:bg-white transition-all rounded-[10px]">
                <div className="w-[300px] rounded-t-[10px] rounded-tr-[10px] mb-4 overflow-y-hidden">
                  <img
                    src={product.images}
                    alt="featured image"
                    className=" w-full rounded-t-[10px] rounded-tr-[10px]"
                  />
                </div>
                <div className="px-4 ">
                  <figcaption className="text-[#AAAAAA] font-bold text-[14px] leading-[16.8px]">
                    <p className="flex gap-4 mb-2">
                      <time dateTime="2022-06-22"> 22-06-2022 </time>{" "}
                      <span> | </span>
                      <span>{product.title}</span>
                    </p>
                  </figcaption>
                  <article>
                    <p className="text-primaryBlue font-bold mb-4 ">Business</p>
                    <h4 className="font-bold leading-[19.2px] mb-1">
                      {product.price}
                    </h4>
                    <p className="text-[14px] leading-6 mb-4 ">
                      {product.description}
                    </p>
                    <div className="flex justify-end mb-[39px] ">
                      {/* <Link to="/" className="font-bold ">
                        Read
                      </Link> */}
                    </div>
                  </article>
                </div>
              </figure>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
