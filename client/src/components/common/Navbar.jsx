import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from "../images/logo.png";

const HeadNavbar = () => {
  const { t } = useTranslation();
  const [location, setLocation] = useState('your location');

  useEffect(() => {
    // Função para obter a localização do usuário
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setLocation(data.city);
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    fetchLocation();
  }, []);

  return (
    <div>
      <div className="bg-gray-50 text-black text-center text-sm p-2 fixed w-full top-0 z-50">
        {t('freeShippingMessage', { location: location.toUpperCase() })}
      </div>
      <div className="bg-white shadow-md fixed w-full top-8 z-50">
        <div className="max-w-[1240px] mx-auto py-4 flex flex-col items-center">
          <a href="/">
            <img src={logo} alt="Logo" className="h-12 mb-4" />
          </a>
          <div className="w-full flex justify-center items-center relative">
            <ul className="flex space-x-8 text-gray-700">
              <li><a href="/illustration" className="hover:text-green-700">{t('illustration')}</a></li>
              <li><a href="/products" className="hover:text-green-700">{t('products')}</a></li>
            </ul>
            <div className="absolute right-0 flex items-center space-x-4">
              <button className="p-2 bg-transparent focus:outline-none">
                <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.34 2M7 13h10l4-8H5.34M7 13l-1.12 5.6M7 13h10m0 0l-1.34 6H8.34M9 19h6"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-32"></div> {/* Adiciona um preenchimento superior para compensar a altura da barra de navegação fixa e da mensagem */}
    </div>
  );
};

export default HeadNavbar;
