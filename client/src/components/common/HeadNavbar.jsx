import React, { useEffect, useState } from 'react';

const HeadNavbar = () => {
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
    <div className="bg-gray-50 text-black text-center  text-sm p-2">
      ENVIO GRÁTIS PARA {location.toUpperCase()} EM TODAS AS ENCOMENDAS ACIMA DE 25€
    </div>
  );
};

export default HeadNavbar;
