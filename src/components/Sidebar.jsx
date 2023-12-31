import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { BsFillTrash2Fill } from "react-icons/bs";
import CartItem from "../components/CartItem";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b ">
        <div className=" uppercase text-sm font-semibold">
          Total items in cart: {itemAmount}
        </div>
        {/* icon */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <BsArrowRight className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[60vh] overflow-y-auto overflow-x-hidden border-b ">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4 ">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2 ">Total:</span>{" "}
            {`$ ${parseFloat(total).toFixed(2)}`}
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer text-red-700  flex justify-center items-center text-sm font-medium"
          >
            <div>CLEAR ALL</div>
            {/* <BsFillTrash2Fill /> */}
          </div>
        </div>
        <Link
          to="/"
          className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
        >
          View cart
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
