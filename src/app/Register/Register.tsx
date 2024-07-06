"use client";

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerValidationSchema } from '../../utils/validations';
import { handleSubmit, initialValues } from '../../helpers/userRegister.helper';

const Register: React.FC = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: "1000px" }}>
        <div className="md:flex w-full">
          <div className="hidden md:flex w-1/2 bg-gray-900 py-10 px-10 justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <circle cx="32" cy="32" r="30" />
                <circle cx="32" cy="24" r="12" />
                <path d="M16 44c0 8 8 8 16 8s16 0 16-8-8-8-16-8-16 0-16 8z" />
              </g>
            </svg>
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">CREAR CUENTA</h1>
              <p> Ingresa tus datos para registrarte </p>
            </div>
            <Formik initialValues={initialValues} validationSchema={registerValidationSchema} onSubmit={handleSubmit}>
              {({ isSubmitting }) => (
                <Form>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label htmlFor="name" className="text-xs font-semibold px-1">Nombre</label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <Field
                          id="name"
                          name="name"
                          type="text"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-700"
                          placeholder="escribe aqui..."
                        />
                      </div>
                      <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>

                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label htmlFor="email" className="text-xs font-semibold px-1">Email</label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                        </div>
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-700"
                          placeholder="Henry@example.com"
                        />
                      </div>
                      <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>

                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label htmlFor="address" className="text-xs font-semibold px-1">Direccion</label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-home-outline text-gray-400 text-lg"></i>
                        </div>
                        <Field
                          id="address"
                          name="address"
                          type="text"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-700"
                          placeholder="calle falsa 123"
                        />
                      </div>
                      <ErrorMessage name="address" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>

                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label htmlFor="phone" className="text-xs font-semibold px-1">Telefono</label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-phone-outline text-gray-400 text-lg"></i>
                        </div>
                        <Field
                          id="phone"
                          name="phone"
                          type="text"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-700"
                          placeholder="5555 5555"
                        />
                      </div>
                      <ErrorMessage name="phone" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>

                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label htmlFor="password" className="text-xs font-semibold px-1">Contraseña</label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <Field
                          id="password"
                          name="password"
                          type="password"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-700"
                          placeholder="************"
                        />
                      </div>
                      <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>

                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-12">
                      <label htmlFor="confirmPassword" className="text-xs font-semibold px-1">Confirmar Contraseña</label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <Field
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-700"
                          placeholder="************"
                        />
                      </div>
                      <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>

                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <button type="submit" disabled={isSubmitting} className="block w-full max-w-xs mx-auto bg-gray-900 hover:bg-gray-700 focus:bg-gray-700 text-white rounded-lg px-3 py-3 font-semibold">
                        {isSubmitting ? 'Enviando...' : 'ENVIAR DATOS'}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;








