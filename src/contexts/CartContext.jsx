import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(product, id) {
    const newItem = { ...product, amount: 1 };
    // check if the item is already added to cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // If cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  }

  function removeFromCart(id) {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  }

  // clear cart
  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
