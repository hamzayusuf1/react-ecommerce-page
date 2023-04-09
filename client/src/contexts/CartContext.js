import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [orderNum, setOrderNum] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [prodName, setProdName] = useState("Brand New Men's Suits");
  const [count, setCount] = useState(0);

  return (
    <CartContext.Provider
      value={{
        orderNum,
        setOrderNum,
        showCart,
        setShowCart,
        prodName,
        setProdName,
        count,
        setCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
