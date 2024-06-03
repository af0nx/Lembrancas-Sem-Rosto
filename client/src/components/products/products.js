// src/components/products/products.js
import React from 'react';
import ProductList from './productList';
import Navbar from '../common/Navbar';


const Products = () => {
  return (
    <div className="App text-center">
      <Navbar />
      
      <ProductList />
    </div>
  );
};

export default Products;
