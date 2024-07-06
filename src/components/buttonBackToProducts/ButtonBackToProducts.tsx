import React from 'react';
import Link from 'next/link';

const BackToProducts: React.FC = () => {
  return (
    <div className="text-center mt-4">
      <Link href="/Products" className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
       Seguir Comprando
      </Link>
    </div>
  );
};

export default BackToProducts;
