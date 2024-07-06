'use client';

import Swal from 'sweetalert2';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const initialValues = {
  name: '',
  email: '',
  address: '',
  phone: '',
  password: '',
  confirmPassword: ''
};

export const handleSubmit = async (values: typeof initialValues, { resetForm }: { resetForm: () => void }) => {
  try {
    const response = await fetch(`${apiUrl}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error en el registro: ${response.status} - ${errorData.message}`);
    }

    const data = await response.json();
    console.log("Submit exitoso", data);
    resetForm();
    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
      showConfirmButton: true,
      confirmButtonText: 'OK'
       }).then((result) => {
      if (result.isConfirmed) {
        window.location.replace('/Login');
      }
      });
    

  } catch (error) {
    console.error("Error en el registro:", error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: (error as Error).message || 'Error en el Registro',
    });
  }
};