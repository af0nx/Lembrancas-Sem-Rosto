// src/components/products/product.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="border rounded-lg p-4 m-4 max-w-xs">
      <Link to={`/products/${product.name}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
        <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-green-500 font-bold mt-2">R${product.price.toFixed(2)}</p>
      </Link>
      <button 
        onClick={handleAddToCart} 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
