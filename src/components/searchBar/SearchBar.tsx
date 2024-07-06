// src/components/SearchBar.tsx
"use client";

import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para buscar productos
    console.log("Buscando:", searchTerm);
  };

  return (
    <form className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto pt-6 flex items-center" onSubmit={handleSearch}>
      <div className="relative w-full">
        <input 
          type="text" 
          placeholder="Buscar productos..." 
          className="w-full px-4 py-2 pr-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div className="w-px h-6 bg-gray-300 mx-2"></div>
          <button type="submit" className="px-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l5-5m0 0l-5-5m5 5h-9"></path>
              <circle cx="10" cy="10" r="7" stroke="none" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
