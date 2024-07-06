import React, { useState, useEffect } from 'react';
import { IProducts, Category } from '../../types/interfaces';

const SideNavCategory: React.FC<{ products: IProducts[], onSelectCategory: (categoryIds: number[]) => void }> = ({ products, onSelectCategory }) => {
  const categories: Category[] = [
    { id: 1, name: 'Teléfonos' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Tablets' },
    { id: 4, name: 'Wearables' },
    { id: 5, name: 'Accesorios' },
    { id: 6, name: 'Smart Home' },
    { id: 7, name: 'Drones' },
    { id: 8, name: 'Consolas' },
    { id: 9, name: 'Cámaras' },
  ];

  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    onSelectCategory(selectedCategories);
  }, [selectedCategories, onSelectCategory]);

  const handleCategoryClick = (categoryId: number) => {
    const index = selectedCategories.indexOf(categoryId);
    if (index === -1) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      const updatedCategories = selectedCategories.filter(id => id !== categoryId);
      setSelectedCategories(updatedCategories);
    }
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        className="lg:hidden px-4 py-2 bg-gray-900 text-white rounded-md">
        Categorías
      </button>
      <aside className={`lg:block ${isMenuOpen ? 'block' : 'hidden'} w-56 bg-gray-900 text-gray-200 rounded-lg shadow-lg lg:relative lg:top-auto lg:left-auto lg:transform-none absolute top-16 left-0 transform translate-x-0 transition-transform duration-300`}>
        <div className="p-6">
          <h2 className="text-xl font-semibold">Categorías</h2>
          <nav className="mt-6">
            <ul>
              {categories.map(category => (
                <li key={category.id} className="my-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id={`category-${category.id}`}
                      checked={selectedCategories.includes(category.id)}
                      onChange={() => handleCategoryClick(category.id)}
                      className="mr-2 cursor-pointer"
                    />
                    <label
                      htmlFor={`category-${category.id}`}
                      className="cursor-pointer text-gray-200"
                    >
                      {category.name}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default SideNavCategory;







