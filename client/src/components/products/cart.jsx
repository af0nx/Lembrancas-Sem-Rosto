// src/components/products/cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="border-b py-4">
              <h2 className="text-xl">{item.name}</h2>
              <p className="text-gray-700">{item.description}</p>
              <p className="text-green-500 font-bold">R${item.price.toFixed(2)}</p>
            </div>
          ))}
          <button 
            onClick={clearCart} 
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
