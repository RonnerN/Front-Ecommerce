import { IProducts } from "@/types/interfaces";
import Swal from "sweetalert2";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Función para traer todos los productos
export const fetchProducts = async () => {

try {

if (!apiUrl) {
        throw new Error("API URL is not defined");
}

    const response = await fetch(`${apiUrl}/products`, {
        method: 'Get',
        next:{revalidate: 3600}
    });

if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
}

    const products: IProducts[] = await response.json()
    return products;

} catch (error: any) {
    throw new Error(error.message);
    }
};

// Función para encontrar productos por su id
export const fetchProductDetail = async (id: string) => {
try {

    const products = await fetchProducts();
    const product = products.find((product) => product.id.toString() === id);
    return product; 
    
} catch (error: any) {
    throw new Error(error.message);
}
};

// Función para filtrar productos en oferta por name
export const fetchSalesProducts = async () => {
    try {
        const products = await fetchProducts();  // Obtener todos los productos desde la API
        const salesProducts = products.filter(product => 
            product.name === "Nintendo Switch OLED" ||
            product.name === "Canon EOS R6" ||
            product.name === "Samsung Odyssey G9"
        );
        return salesProducts;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

// Función para filtrar productos recomendados por name
export const fetchRecommendedProducts = async () => {
    try {
        const products = await fetchProducts();  // Obtener todos los productos desde la API
        const recommendedProducts = products.filter(product => 
            product.name === "Samsung Galaxy Z Fold 3" ||
            product.name === "Sony PlayStation 5 Pro" ||
            product.name === "Bose QuietComfort 45"
        );
        return recommendedProducts;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

// Función para agregar productos al carrito
export const addToCart = (product: IProducts, isUserLoggedIn: boolean) => {
    if (!isUserLoggedIn) {
      Swal.fire({
        icon: 'warning',
        title: 'Acceso Restringido',
        text: 'Debes iniciar sesión para poder agregar items a tu carrito y realizar compras de manera segura',
        confirmButtonText: 'OK'
      });
      return;
    }
  
    const storedCart = localStorage.getItem('cart');
    let cartProducts: IProducts[] = storedCart ? JSON.parse(storedCart) : [];
  
    const existingProduct = cartProducts.find(p => p.id === product.id);
    if (existingProduct) {
      cartProducts = cartProducts.map(p =>
        p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
      );
    } else {
      cartProducts.push(product);
    }
  
    localStorage.setItem('cart', JSON.stringify(cartProducts));
    Swal.fire({
      icon: 'success',
      title: '¡Añadido al carrito!',
      text: `${product.name} se ha agregado a tu carrito!`,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  };


// Función Filtrar productos cuando cambia selectedCategories
  export const handleCategorySelect = (categoryIds: number[], products: IProducts[], setFilteredProducts: (products: IProducts[]) => void) => {
    if (categoryIds.length === 0) {
      setFilteredProducts(products); // Mostrar todos los productos si no hay categorías seleccionadas
    } else {
      const filtered = products.filter(product => categoryIds.includes(product.categoryId || 0)); // Usar 0 como valor por defecto si categoryId es undefined
      setFilteredProducts(filtered);
    }
  };