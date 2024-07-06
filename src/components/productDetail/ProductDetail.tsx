'use client'

import React, { useEffect, useState } from 'react';
import { IProducts } from '@/types/interfaces';
import Button from '../button/Button';
import BackToProducts from '../buttonBackToProducts/ButtonBackToProducts';
import { isLoggedIn } from '@/helpers/userLogout.helper';
import { addToCart } from '@/helpers/product.helper';


export const ProductDetail: React.FC<IProducts> = ({ id, name, description, price = 0, stock=0, image }) => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {

      setIsUserLoggedIn(isLoggedIn()); 

      }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="container mx-auto px-6">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="sm:flex sm:items-center sm:px-6 lg:px-8">
                        <img 
                            className="w-full sm:w-1/2 object-cover object-center" 
                            src={image} 
                            alt={`Imagen de ${name}`} 
                        />
                        <div className="p-6 sm:p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">{name}</h2>
                            <p className="text-gray-700 mb-4">{description}</p>
                            <div className="flex items-center mb-4">
                                <span className="text-2xl font-semibold text-gray-900">${price.toFixed(2)}</span>
                                <span className={`ml-4 px-2 py-1 text-sm font-semibold rounded ${stock > 0 ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                                    {stock > 0 ? `En stock (${stock} disponibles)` : 'Agotado'}
                                </span>
                            </div>
                              <Button
                                text={stock > 0 ? 'Agregar al Carrito' : 'No Disponible'}
                                onClick={() => addToCart({ id, name, description, price, stock, image }, isUserLoggedIn)}
                                disabled={stock === 0}
                                className={stock > 0 ? 'bg-blue-500 hover:bg-blue-600 font-semibold' : 'bg-gray-400 cursor-not-allowed'}
                            />
                              <BackToProducts />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
