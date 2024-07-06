import React from "react";
import ProductDetail from "@/components/productDetail/ProductDetail";
import { fetchProductDetail } from "@/helpers/product.helper";
import Link from "next/link";


const Product = async ({ params }: { params: { id: string } }) => {
  const product = await fetchProductDetail(params.id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
        <p className="text-gray-700">El producto que buscas no está disponible o no existe.</p>
        <Link href="/" className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
          Volver a la página principal
        </Link>
      </div>
    </div>
    );
  }

  const { id, name, price, description, stock, image } = product;

  return (
    <ProductDetail
      id={id}
      name={name}
      price={price}
      description={description}
      stock={stock}
      image={image}
    />
  );
};

export default Product;




