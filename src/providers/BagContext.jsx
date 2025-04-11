import React, { createContext, useContext, useState } from "react";

const BagContext = createContext();

export const useBag = () => {
  return useContext(BagContext);
};

export const BagProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Tente carregar o estado do carrinho do localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart)); // Atualize o localStorage
  };

  const removeFromCart = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <BagContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </BagContext.Provider>
  );
};
