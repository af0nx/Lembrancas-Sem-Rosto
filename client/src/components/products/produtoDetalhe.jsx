import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';
import Navbar from '../common/Navbar';

const ProdutoDetalhe = () => {
  const { name } = useParams();
  const product = products.find(p => p.name === name);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const handleNextImage = () => {
    if (product.images && product.images.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    }
  };

  const handlePrevImage = () => {
    if (product.images && product.images.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto p-4">
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-green-500 font-bold mt-2">Base Price: ${product.basePrice.toFixed(2)}</p>

        <div className="relative mt-4">
          {product.images && product.images.length > 0 ? (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full hover:bg-gray-600"
              >
                <ArrowLeftIcon className="h-5 w-5" />
              </button>
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <button
                onClick={handleNextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full hover:bg-gray-600"
              >
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </>
          ) : (
            <p>No images available</p>
          )}
        </div>

        <p className="text-green-500 font-bold mt-4">Total Price: ${product.basePrice.toFixed(2)}</p>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4">
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProdutoDetalhe;
