'use client'

import React, { useState, useEffect } from 'react';
import CardProduct from '../cardProduct/CardProduct';
import { IProducts } from "../../types/interfaces";
import { fetchProducts, addToCart, handleCategorySelect } from '@/helpers/product.helper';
import { isLoggedIn } from '../../helpers/userLogout.helper';
import SideNavCategory from '../sideNavCategory/SideNavCategory';

const CardsProducts: React.FC = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [showSideNav] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setFilteredProducts(data); // Inicialmente mostrar todos los productos
    };

    fetchData();
    setIsUserLoggedIn(isLoggedIn()); 
  }, []);

  useEffect(() => {
    handleCategorySelect(selectedCategories, products, setFilteredProducts);
  }, [selectedCategories, products]);

  return (
    <div className="flex flex-col lg:flex-row items-start p-4 sm:p-8 md:p-8 lg:p-16 max-w-screen-2xl mx-auto">
      <div className={`lg:w-1/4 ${showSideNav ? 'block' : 'show'} lg:block p-8 z-10`}>
  <SideNavCategory products={products} onSelectCategory={setSelectedCategories} />
</div>

      <div className="flex flex-col w-full lg:w-3/4">
        <h1 className="text-3xl text-center font-semibold mb-4">PRODUCTOS</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {filteredProducts.map(({ id, name, price, image }) => (
            <div key={id} className="flex justify-center">
              <CardProduct
                id={id}
                name={name}
                price={price}
                image={image}
                addToCart={(product) => addToCart(product, isUserLoggedIn)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsProducts;















