import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { BsFillTrash2Fill } from "react-icons/bs";
import CartItem from "../components/CartItem";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b ">
        <div className=" uppercase text-sm font-semibold ">
          Shopping Bag (0)
        </div>
        {/* icon */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <BsArrowRight className="text-2xl" />
        </div>
      </div>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <div>
        <div className="bg-purple-200 flex w-full justify-between items-center">
          {/* total */}
          <div>
            <span>Total:</span> $ 1000
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-700 text-white w-12 h-12 flex justify-center items-center text-xl "
          >
            <BsFillTrash2Fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
