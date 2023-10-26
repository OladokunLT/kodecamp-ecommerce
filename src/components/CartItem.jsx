import React, { useContext } from "react";
import {
  BsDash,
  BsDashCircle,
  BsFileMinus,
  BsPlug,
  BsPlus,
  BsSubtract,
  BsTerminal,
  BsX,
  BsXCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500 ">
      <div className="w-full max-h-[150px] flex items-center gap-x-4 ">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="product image" />
        </Link>
        <div className="w-full flex flex-col ">
          {/* title & remove icon */}
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-blue-800 underline hover:no-underline "
            >
              {" "}
              {title}{" "}
            </Link>
            {/* remove icon */}
            <div
              className="text-xl cursor-pointer"
              onClick={() => removeFromCart(id)}
            >
              <BsXCircleFill className="text-red-700 hover:text-red-400 transition " />
            </div>
          </div>
          <div className="bg-purple-200 flex items-center gap-x-2 h-[36px] text-sm ">
            {/* quantity */}
            <div className="flex flex-1 max-w-[100px] bg-purple-100 items-center h-full border text-primary font-medium ">
              <div
                onClick={() => decreaseAmount(id)}
                className="flex flex-1 h-full flex justify-center items-center cursor-pointer bg-red-500"
              >
                <BsDash />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 flex h-full justify-center items-center cursor-pointer"
              >
                <BsPlus />
              </div>
            </div>
            <div className=" flex-1 flex items-center justify-around">
              $ {price}
            </div>
            <div className="flex-1 flex justify-end items-center text-primary font-medium ">
              {" "}
              {`$ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
