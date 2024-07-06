'use client'

import React, { useEffect, useState } from 'react';
import { IProducts } from "../../types/interfaces";
import { fetchRecommendedProducts } from '@/helpers/product.helper';
import Link from 'next/link';

const RecommendedProducts: React.FC = () => {
    const [recommendedProducts, setRecommendedProducts] = useState<IProducts[]>([]);

    useEffect(() => {
        const getRecommendedProducts = async () => {
            try {
                const fetchedRecommendedProducts = await fetchRecommendedProducts();
                setRecommendedProducts(fetchedRecommendedProducts);
            } catch (error) {
                console.error('Error fetching recommended products:', error);
            }
        };

        getRecommendedProducts();
    }, []);
    
    return (
        <div className="mx-auto max-w-screen-2xl pb-16">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Productos Recomendados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recommendedProducts.map((product, index) => (
                    <div key={product.id} className={`overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm ${index % 2 === 0 ? 'md:col-span-1' : 'md:col-span-1 md:col-start-2'}`}>
                        <h3 className="text-2xl text-center font-bold text-gray-900 mb-2 p-8">{product.name}</h3>
                        <div className="ml-8 mr-8 flex items-center justify-center">
                            <Link href={`/Products/${product.id}`}>
                                <div className="relative w-full h-72">
                                    <img src={product.image} alt={product.name} className="object-fill w-full h-full transition duration-300 transform hover:scale-105" />
                                </div>
                            </Link>
                        </div>
                        <div className="p-4">
                            <p className="text-gray-700 mb-4 line-clamp-4">{product.description}</p>
                            <p className="text-gray-800 font-semibold text-2xl">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecommendedProducts;




