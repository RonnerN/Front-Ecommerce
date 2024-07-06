'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SideNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className="relative top-auto left-auto w-20 lg:w-48 bg-gray-700 text-gray-200 h-screen">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4 hidden lg:block">
          <svg
            className="inline-block h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Mi cuenta
        </h2>
        <nav>
          <ul>
            <li className="my-2">
              <Link href="/UserDashboard/Profile">
                <div className={`flex items-center p-2 hover:bg-gray-900 rounded ${pathname === '/UserDashboard/Profile' ? 'bg-gray-900' : ''}`}>
                  <svg
                    className="h-8 w-8 lg:mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="hidden lg:inline-block">Perfil</span>
                </div>
              </Link>
            </li>
            <li className="my-2">
              <Link href="/UserDashboard/Orders">
                <div className={`flex items-center p-2 hover:bg-gray-900 rounded ${pathname === '/UserDashboard/Orders' ? 'bg-gray-900' : ''}`}>
                  <svg
                    className="h-8 w-8 lg:mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7a2 2 0 114 0 2 2 0 01-4 0zM15 7a2 2 0 114 0 2 2 0 01-4 0zM3 3h18v8a2 2 0 01-2 2H5a2 2 0 01-2-2V3zm18 5H3m18 0h-4m4 0H3m18 0h-4m4 0H3m18 0h-4m4 0H3m18 0h-4" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0v6m0 0l-3-3m3 3l-3 3" />
                  </svg>
                  <span className="hidden lg:inline-block">Ordenes</span>
                </div>
              </Link>
            </li>
            <li className="my-2">
              <Link href="/UserDashboard/Cart">
                <div className={`flex items-center p-2 hover:bg-gray-900 rounded ${pathname === '/UserDashboard/Cart' ? 'bg-gray-900' : ''}`}>
                  <svg
                    className="h-8 w-8 lg:mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="hidden lg:inline-block">Carrito</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideNav;























