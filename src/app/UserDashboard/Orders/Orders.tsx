'use client';

import React, { useState, useEffect } from 'react';
import { IOrder } from '@/types/interfaces';
import { fetchOrders } from '@/helpers/orders.helper';

const MyOrders: React.FC = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    fetchOrders(setOrders);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="block bg-white rounded-md shadow-sm p-4 mt-8 w-full max-w-4xl">
        <h1 className="text-3xl text-center font-semibold mb-6">Historial de Compras</h1>
        {orders.length === 0 ? (
          <p className="text-center text-gray-500">No has realizado compras</p>
        ) : (
          <div className="overflow-auto max-h-96 p-4">
            {orders.map(order => (
              <div key={order.id} className="mb-4 p-4 border rounded-lg">
                <div className="mb-2">
                  <h2 className="text-lg font-semibold">{`Orden ${order.id}`}</h2>
                  <p className="text-gray-600">{`Fecha: ${new Date(order.date).toLocaleDateString('es-ES')}`}</p>
                </div>
                <div>
                  <h3 className="text-md font-semibold">Productos:</h3>
                  <ul className="list-disc ml-5">
                    {order.products.map(product => (
                      <li key={product.id} className="mb-2">
                        <div className="flex items-center">
                          <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4" />
                          <span>{product.name}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;












