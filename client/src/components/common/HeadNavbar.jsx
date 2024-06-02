import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
    <div className="bg-gray-50 text-black text-center text-sm p-2">
      {t('freeShippingMessage', { location: location.toUpperCase() })}
    </div>
  );
};

export default HeadNavbar;
