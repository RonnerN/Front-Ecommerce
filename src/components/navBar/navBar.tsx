'use client'

import React, { useState, useEffect } from 'react';
import logo from "../../../public/logo1.png"
import SearchBar from '../searchBar/SearchBar';
import { isLoggedIn, logout } from '../../helpers/userLogout.helper'; 
import Link from 'next/link';
import Swal from 'sweetalert2';

const NavBar: React.FC = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsUserLoggedIn(isLoggedIn());

    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      setUserName(userInfo.name);
    }
  }, []);

  const handleClick = () => {
    if (!isUserLoggedIn) {
      Swal.fire({
        icon: 'warning',
        title: 'Acceso Restringido',
        text: 'Debes iniciar sesión para poder disfrutar de las mejores ofertas y promociones',
        confirmButtonText: 'OK'
      });
    }
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-wrap place-items-center bg-gray-900 relative z-50">
      <section className="relative mx-auto w-full">
        <SearchBar />
        <nav className="bg-gray-900 text-gray-200">
          <div className="px-10 py-6 flex w-full items-center justify-between">
            <Link className="text-3xl font-bold font-heading" href="/">
              <img className="transition duration-300 transform hover:scale-105 h-20" src={logo.src} alt="logo" />
            </Link>
            <ul className="hidden lg:flex pr-1 mx-auto font-semibold font-heading space-x-12">
              <li><Link className="hover:text-gray-500" href="/">Inicio</Link></li>
              <li><Link className="hover:text-gray-500" href="/Products">Productos</Link></li>
              <li><Link className="hover:text-gray-500" href="/AboutUs">Acerca de</Link></li>
              <li><Link className="hover:text-gray-500" href="/ContactUs">Contacto</Link></li>
            </ul>
            <div className="hidden lg:flex items-center space-x-5">
              <Link className="hover:text-gray-500" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </Link>
              <div onClick={handleClick}>
                <Link className="flex items-center hover:text-gray-500" href="/UserDashboard/Cart" style={{ pointerEvents: isUserLoggedIn ? 'auto' : 'none' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </Link>
              </div>
              {isUserLoggedIn ? (
                <>
                  <Link className="flex items-center hover:text-gray-500" href="/UserDashboard/Profile">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-2 font-semibold font-heading">{userName}</span>
                  </Link>
                  <Link className="inline-block px-3 py-1 bg-red-700 text-gray-200 font-semibold rounded-lg shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75" href="" onClick={logout}>
                    Salir
                  </Link>
                </>
              ) : (
                <Link className="inline-block px-3 py-1 bg-green-600 text-gray-200 font-semibold rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75" href="/Login">
                 Ingresar
                </Link>
              )}
            </div>
            <div className="lg:hidden flex items-center">
              <button className="navbar-burger" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-900 text-gray-200 w-2/5 absolute top-full right-0 z-40`}>
            <ul className="flex flex-col items-center space-y-4 py-6">
              <li><Link className="hover:text-gray-500 block w-full text-center" href="/">Inicio</Link></li>
              <li><Link className="hover:text-gray-500 block w-full text-center" href="/Products">Productos</Link></li>
              <li><Link className="hover:text-gray-500 block w-full text-center" href="/AboutUs">Acerca de</Link></li>
              <li><Link className="hover:text-gray-500 block w-full text-center" href="/ContactUs">Contacto</Link></li>
              {isUserLoggedIn ? (
                <>
                  <li><Link className="hover:text-gray-500 block w-full text-center" href="/UserDashboard/Profile">Perfil</Link></li>
                  <li><Link className="hover:text-gray-500 block w-full text-center" href="" onClick={logout}>Salir</Link></li>
                </>
              ) : (
                <li><Link className="hover:text-gray-500 block w-full text-center" href="/Login">Ingresar</Link></li>
              )}
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
  
};

export default NavBar;





