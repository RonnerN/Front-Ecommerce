'use client';

import React from 'react';
import { useUserProfile, handleSave } from '@/helpers/userProfile.helper';

const UserProfile: React.FC = () => {
  const { userInfo, selectedFile, preview, handleFileChange } = useUserProfile();

  if (!userInfo) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="block bg-white rounded-md shadow-sm p-8 w-full max-w-4xl">
        <h1 className="font-bold text-4xl text-gray-900 text-center mb-8">Perfil de Usuario</h1>

        <div className="md:flex w-full justify-between">
          <div className="w-full md:w-2/3 py-10 px-5 md:px-10">
            <div className="flex flex-col space-y-5">
              <div className="flex flex-col md:flex-row items-center">
                <h2 className="font-bold text-2xl text-gray-600">Nombre:</h2>
                <p className="text-xl text-gray-600 mt-2 md:mt-0 md:ml-2">{userInfo.name}</p>
              </div>
              <div className="flex flex-col md:flex-row items-center">
                <h2 className="font-bold text-2xl text-gray-600">Email:</h2>
                <p className="text-xl text-gray-600 mt-2 md:mt-0 md:ml-2">{userInfo.email}</p>
              </div>
              <div className="flex flex-col md:flex-row items-center">
                <h2 className="font-bold text-2xl text-gray-600">Dirección:</h2>
                <p className="text-xl text-gray-600 mt-2 md:mt-0 md:ml-2">{userInfo.address}</p>
              </div>
              <div className="flex flex-col md:flex-row items-center">
                <h2 className="font-bold text-2xl text-gray-600">Teléfono:</h2>
                <p className="text-xl text-gray-600 mt-2 md:mt-0 md:ml-2">{userInfo.phone}</p>
              </div>
            </div>
          </div>

          <div className="flex w-full md:w-1/3 py-10 justify-center items-center">
            <div className="relative">
              <img
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto mb-4"
                src={preview}
                alt={`${userInfo.name}'s avatar`}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute bottom-0 right-0 opacity-0 h-full w-full cursor-pointer"
              />
              <button
                onClick={() => handleSave(selectedFile)}
                className="block w-full max-w-xs mx-auto bg-gray-900 hover:bg-gray-700 focus:bg-gray-700 text-white rounded-lg px-3 py-3 font-semibold text-lg"
              >
                Cambiar Foto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;









