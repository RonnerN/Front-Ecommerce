import Swal from 'sweetalert2';

export const isLoggedIn = () => {
  return !!localStorage.getItem('token');
};

export const logout = () => {
  Swal.fire({
    title: '¿Estás seguro de que quieres cerrar sesión?',
    text: "Tu sesión será cerrada y volverás al inicio.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, cerrar sesión',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      // Proceso de cerrar sesión
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
      
      // Mostrar mensaje de éxito
      Swal.fire({
        icon: 'success',
        title: 'Sesión cerrada exitosamente',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        // Redirigir solo después de confirmar el cierre de sesión
        window.location.href = '/';
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // Si el usuario cancela, no se hace ninguna acción
      Swal.fire({
        title: 'Cancelado',
        text: 'Tu sesión sigue activa.',
        icon: 'info',
        timer: 1500,
        showConfirmButton: false
      });
    }
  });
};


  

