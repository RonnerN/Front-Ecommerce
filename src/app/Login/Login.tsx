"use client"

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginValidationSchema } from '../../utils/validations';
import {initialValues, handleSubmit } from '../../helpers/userLogin.helper';
import Link from 'next/link';


const Login: React.FC = () => {
  
  return (
    <div className="min-w-screen min-h-screen bg-rgb(232, 232, 232) flex items-center justify-center px-5 py-5">
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
              <h1 className="font-bold text-3xl text-gray-900">INICIAR SESION</h1>
              <p>Ingresa tus datos para iniciar sesion</p>
            </div>
            <Formik initialValues={initialValues} validationSchema={loginValidationSchema} onSubmit={handleSubmit}>
              {({ isSubmitting }) => (
                <Form className="my-10">
                  <div className="flex flex-col space-y-5">
                    <label htmlFor="email">
                      <p className="text-xs font-semibold px-1">Email</p>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                        </div>
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-700"
                          placeholder="Ingresa tu direccion de email"
                        />
                      </div>
                      <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                    </label>
                    <label htmlFor="password">
                      <p className="text-xs font-semibold px-1">Contraseña</p>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <Field
                          id="password"
                          name="password"
                          type="password"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-700"
                          placeholder="Ingresa tu contraseña"
                        />
                      </div>
                      <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                    </label>
                    <div className="flex flex-row justify-between">
                      <div>
                        <label htmlFor="remember" className="flex items-center">
                          <Field type="checkbox" id="remember" name="remember" className="w-4 h-4 border-slate-200 focus:bg-indigo-600" />
                          <span className="text-xs font-semibold px-2">Recordarme</span>
                        </label>
                      </div>
                      <div>
                        <Link href="#" className="text-xs font-semibold text-indigo-600">Olvidaste tu contraseña?</Link>
                      </div>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="block w-full max-w-xs mx-auto bg-gray-900 hover:bg-gray-700 focus:bg-gray-700 text-white rounded-lg px-3 py-3 font-semibold">
                      {isSubmitting ? 'Enviando...' : 'INGRESA'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <p className="text-center mt-5">Aun sin registrar? <Link href="/Register" className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Registrate ahora aqui</span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg></span></Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;



