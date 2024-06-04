// src/components/products/cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="border-b py-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl">{item.name}</h2>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-green-500 font-bold">R${item.price.toFixed(2)}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item)} 
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-xl">Total: <span className="font-bold">R${totalAmount}</span></p>
          </div>
          <Link to="/checkout">
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
