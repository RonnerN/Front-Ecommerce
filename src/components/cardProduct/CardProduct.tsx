import React from 'react';
import { CardProductProps } from "../../types/interfaces";
import Link from 'next/link';

const CardProduct: React.FC<CardProductProps> = ({ id, name, price, image, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ id, name, price, image, quantity: 1 });
  };

  return (
    <div className="w-64 h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden">
      <Link href={`/Products/${id}`}>
        <div className="flex justify-center items-center h-52 p-4">
          <img className="max-h-52 max-w-full object-contain hover:shadow-s hover:transform hover:scale-105 transition-transform duration-300" src={image} alt="product image" />
        </div>
      </Link>
      <Link href={`/Products/${id}`}>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center pt-2 pb-8 overflow-hidden line-clamp-1">{name}</h5>
      </Link>
      <div className="px-5 py-2 bg-yellow-200 text-center absolute botton-0 left-0 right-0">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
      </div>
      <button onClick={handleAddToCart} className="absolute bottom-0 left-0 right-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-tl-none rounded-tr-none">
        Agregar
      </button>
    </div>
  );
};

export default CardProduct;















