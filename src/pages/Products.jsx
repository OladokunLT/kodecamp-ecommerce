import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("/products");
    console.log(response);
    try {
      setIsLoading(true);
      const response = await axios.get("/products");
      console.log(response);
      if (response.status !== 200) {
        setProducts(response.data);
        setIsLoading(false);
        console.log("succesfull");
      }
    } catch (error) {
      console.log(error);
      console.log("bad request");
    }
  };

  const addItem = (item) => {
    console.log("item", item);
    let isInCart = cart.some((prod) => prod.id === item.id);
    if (!isInCart) {
      setCart([...cart, item]);
    }
  };

  useEffect(() => {
    getProducts;
  }, []);

  console.log(products);

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <p className="text-center">Loading</p>
      ) : (
        <section>
          <p>Items in cart: {cart.length}</p>
          <div className="grid grid-cols-4 gap-5">
            {cart.map((product) => {
              const { id, title, price, description, category, image, rating } =
                product;
              return (
                <div
                  key={id}
                  className=" border border-orange-400 rounded-md p-4"
                >
                  <img
                    src={image}
                    alt={description}
                    className="h-40  w-full object-scale-down"
                  />
                  <div>
                    <p>{title}</p>
                    <p>{description}</p>
                    <p>{category}</p>
                    <p>${price}</p>
                    <p>{rating.rate}</p>
                    {/* <p className="flex">
                        {[...Array(Math.round(rating.rate))].map((e, i) => (
                          <BsStarFill key={i} className=" text-yellow-600" />
                        ))}
                        {[...Array(5 - Math.round(rating.rate))].map((e, i) => (
                          <BsStar key={i} className="text-yellow-600" />
                        ))}
                      </p> */}
                    <div className="flex justify-between my-6">
                      <button
                        onClick={() => addItem(product)}
                        className="py-3 px-5 rounded-md bg-blue-600 text-white"
                      >
                        Add to cart
                      </button>
                      <Link to={`/products/${id}`} className="text-blue-500">
                        See Product
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="grid grid-cols-4 gap-5">
            {products.map((product) => {
              const { id, title, price, description, category, image, rating } =
                product;
              return (
                <div
                  key={id}
                  className=" border border-orange-400 rounded-md p-4"
                >
                  <img
                    src={image}
                    alt={description}
                    className="h-40  w-full object-scale-down"
                  />
                  <div>
                    <p>{title}</p>
                    <p>{description}</p>
                    <p>{category}</p>
                    <p>${price}</p>
                    <p>{rating.rate}</p>
                    {/* <p className="flex">
                        {[...Array(Math.round(rating.rate))].map((e, i) => (
                          <BsStarFill key={i} className=" text-yellow-600" />
                        ))}
                        {[...Array(5 - Math.round(rating.rate))].map((e, i) => (
                          <BsStar key={i} className="text-yellow-600" />
                        ))}
                      </p> */}
                    <div className="flex justify-between my-6">
                      <button
                        onClick={() => addItem(product)}
                        className="py-3 px-5 rounded-md bg-blue-600 text-white"
                      >
                        Add to cart
                      </button>
                      <Link to={`/products/${id}`} className="text-blue-500">
                        See Product
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export default Product;

// 137095224
// 409333331
