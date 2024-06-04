// src/components/contexts/CartContext.js
import React, { createContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cookies, setCookie] = useCookies(['cart']);

  useEffect(() => {
    if (cookies.cart) {
      setCart(cookies.cart);
    }
  }, [cookies]);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    setCookie('cart', updatedCart, { path: '/' });
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter(item => item.id !== product.id);
    setCart(updatedCart);
    setCookie('cart', updatedCart, { path: '/' });
  };

  const clearCart = () => {
    setCart([]);
    setCookie('cart', [], { path: '/' });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
