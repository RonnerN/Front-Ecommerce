
import Swal from 'sweetalert2';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const initialValues = {
    email: '',
    password: ''
  };

  export const handleSubmit = async (values: { email: string; password: string }, { resetForm }: { resetForm: () => void }) => {
    try {
      const response = await fetch(`${apiUrl}/users/login`, {
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
      localStorage.setItem('token', data.token);
      localStorage.setItem('userInfo', JSON.stringify(data.user));
      resetForm();
      Swal.fire({
      icon: 'success',
      title: 'Inicio de sesión exitoso',
      showConfirmButton: true,
      confirmButtonText: 'OK'
       }).then((result) => {
      if (result.isConfirmed) {
        window.location.replace('/');
      }
      });
      

    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: (error as Error).message || 'Error al iniciar sesión',
      });
    }
  };

