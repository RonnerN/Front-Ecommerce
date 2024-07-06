import { IOrder } from '@/types/interfaces';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchOrders = async (setOrders: (orders: IOrder[]) => void) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No se encontró el token en el almacenamiento local');
    }

    const response = await fetch(`${apiUrl}/users/orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Error al obtener el historial de compras');
    }

    const data = await response.json();
    setOrders(data);
  } catch (error) {
    console.error('Error al obtener el historial de compras:', error);
  }
};
