
import * as Yup from 'yup';

// Validación para el formulario de login
export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('El email no es válido').required('El email es obligatorio'),
  password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
});

// Validación para el formulario de registro
export const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('El nombre es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede tener más de 50 caracteres'),
  email: Yup.string()
    .email('Email inválido')
    .required('El email es obligatorio')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Ingresa un email válido'
    ),
  address: Yup.string()
    .required('La dirección es obligatoria')
    .min(5, 'La dirección debe tener al menos 5 caracteres'),
  phone: Yup.string()
    .required('El teléfono es obligatorio')
    .matches(
      /^[0-9]{10}$/,
      'El teléfono debe tener 10 dígitos y contener solo números'
    ),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null as any], 'Las contraseñas deben coincidir')
    .required('Confirmar contraseña es obligatorio'),
});



