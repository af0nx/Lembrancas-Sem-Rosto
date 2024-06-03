// src/components/products/productList.jsx
import React from 'react';
import Product from './product';
import products from '../data/products';

const ProductList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
