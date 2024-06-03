// src/components/products/produtoDetalhe.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';
import { ArrowLeftIcon } from '@heroicons/react/solid';

const ProdutoDetalhe = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.name === name);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <button
        onClick={() => navigate('/products')}
        className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 hover:bg-blue-600"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Voltar
      </button>
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-green-500 font-bold mt-2">R${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProdutoDetalhe;
