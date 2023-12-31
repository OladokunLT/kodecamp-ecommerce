import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  console.log(id);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { title, price, description, image } = product;

  return (
    <section className=" flex items-center">
      <div className="container mx-auto mt-[100px] mb-[50px] ">
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center ">
            <img className="max-w-[200px] lg:max-w-xs " src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left w-[95%]">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0 ">
              {" "}
              {title}{" "}
            </h1>
            <div className="text-xl font-medium mb-6">$ {price}</div>
            <p className="mb-8">{description} </p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-purple-300 py-4 px-8 rounded-md font-medium"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
