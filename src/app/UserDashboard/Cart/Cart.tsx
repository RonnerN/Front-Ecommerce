'use client'

import React, { useState, useEffect } from 'react';
import { IProducts } from '@/types/interfaces';
import ButtonBackToProducts from '@/components/buttonBackToProducts/ButtonBackToProducts';
import { getStoredCart, removeFromCart, getTotalPrice, handleCheckout, increaseProductQuantity, decreaseProductQuantity } from '@/helpers/cart.helper';

const Cart: React.FC = () => {
  const [cartProducts, setCartProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    setCartProducts(getStoredCart());
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="block bg-white rounded-md shadow-sm p-4 mt-8 w-full max-w-4xl">
        <h1 className="text-3xl text-center font-semibold mb-6">Carrito de compras</h1>
        {cartProducts.length === 0 ? (
          <>
            <p className="text-center text-gray-500">Tu carrito está vacío</p>
            <ButtonBackToProducts />
          </>
        ) : (
          <>
            <div className="overflow-auto max-h-96">
              {cartProducts.map(product => (
                <div key={product.id} className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 py-4 px-6">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4" />
                    <span className="text-center sm:text-left">{product.name}</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-end w-full sm:w-auto">
                    <span className="mr-4 text-gray-500 ml-4">${product.price}</span>
                    <button 
                      onClick={() => decreaseProductQuantity(product.id, cartProducts, setCartProducts)} 
                      className="bg-gray-300 text-gray-700 py-1 px-2 rounded hover:bg-gray-400">
                      -
                    </button>
                    <span className="mx-2 text-gray-700">{product.quantity || 1}</span>
                    <button 
                      onClick={() => increaseProductQuantity(product.id, cartProducts, setCartProducts)} 
                      className="bg-gray-300 text-gray-700 py-1 px-2 rounded hover:bg-gray-400">
                      +
                    </button>
                    <button 
                      onClick={() => removeFromCart(product.id, cartProducts, setCartProducts)} 
                      className="ml-4 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600">
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <p className="text-right font-semibold">Total: ${getTotalPrice(cartProducts)}</p>
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={() => handleCheckout(cartProducts, setCartProducts)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Continuar compra</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;









