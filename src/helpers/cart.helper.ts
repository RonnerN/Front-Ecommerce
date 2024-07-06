import Swal from 'sweetalert2';
import { IProducts } from '@/types/interfaces';

// Obtiene el carrito almacenado en localStorage
export const getStoredCart = (): IProducts[] => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
};

// Elimina un producto del carrito
export const removeFromCart = (id: number, cartProducts: IProducts[], setCartProducts: (products: IProducts[]) => void) => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: '¿Quieres eliminar este producto del carrito?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'No, cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      const updatedCart = cartProducts.filter(product => product.id !== id);
      setCartProducts(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      Swal.fire({
        icon: 'success',
        title: '¡Producto eliminado!',
        text: 'El producto ha sido eliminado del carrito.',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        }
      });
    }
  });
};

// Obtiene el precio total del carrito
export const getTotalPrice = (cartProducts: IProducts[]): number => {
  return cartProducts.reduce((total, product) => total + (product.price || 0) * (product.quantity || 1), 0);
};

// Maneja la finalización de la compra
export const handleCheckout = async (cartProducts: IProducts[], setCartProducts: (products: IProducts[]) => void) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const userInfoString = localStorage.getItem('userInfo');
    if (!userInfoString) {
      throw new Error('No se encontró información del usuario en el almacenamiento local');
    }
    const userInfo = JSON.parse(userInfoString);
    const userId = userInfo.id;

    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No se encontró el token en el almacenamiento local');
    }

    const requestData = {
      userId,
      products: cartProducts.map(product => product.id),
    };

    const response = await fetch(`${apiUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify(requestData),
    });

    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.message || 'Error al procesar la compra');
    }

    setCartProducts([]);
    localStorage.removeItem('cart');

    Swal.fire({
      icon: 'success',
      title: '¡Compra realizada con éxito!',
      text: 'Gracias por tu compra. Pronto recibirás un correo con los detalles de tu pedido.',
      showConfirmButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#3085d6',
    });
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: (error as Error).message,
      showConfirmButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#d33',
    });
  }
};

// Actualiza la cantidad de un producto en el carrito
export const updateProductQuantity = (productId: number, quantity: number, cartProducts: IProducts[], setCartProducts: (products: IProducts[]) => void) => {
  const updatedCart = cartProducts.map(product => 
    product.id === productId ? { ...product, quantity } : product
  );
  setCartProducts(updatedCart);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
};

// Aumenta la cantidad de un producto en el carrito
export const increaseProductQuantity = (productId: number, cartProducts: IProducts[], setCartProducts: (products: IProducts[]) => void) => {
  const product = cartProducts.find(product => product.id === productId);
  if (product) {
    updateProductQuantity(productId, (product.quantity || 1) + 1, cartProducts, setCartProducts);
  }
};

// Disminuye la cantidad de un producto en el carrito
export const decreaseProductQuantity = (productId: number, cartProducts: IProducts[], setCartProducts: (products: IProducts[]) => void) => {
  const product = cartProducts.find(product => product.id === productId);
  if (product) {
    const newQuantity = Math.max((product.quantity || 1) - 1, 1);
    updateProductQuantity(productId, newQuantity, cartProducts, setCartProducts);
  }
};

