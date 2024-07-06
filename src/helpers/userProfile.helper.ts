import { useState, useEffect } from 'react';

export const useUserProfile = () => {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('https://i.pinimg.com/474x/f9/ef/f5/f9eff5fd8e045349b31d4641253f628f.jpg');

  useEffect(() => {
    const userInfoString = localStorage.getItem('userInfo');
    const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
    setUserInfo(userInfo);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  return { userInfo, selectedFile, preview, handleFileChange };
};

export const handleSave = (selectedFile: File | null) => {
  console.log('Saving profile picture...', selectedFile);
  // Aquí podrías agregar la lógica para subir la imagen al servidor o guardarla en algún lugar
};
