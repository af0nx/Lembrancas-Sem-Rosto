import React from 'react';
import logo from "../images/logo.png"; // Certifique-se de ajustar o caminho conforme necessário

const HeadNavbar = () => {
  return (
    <div>
      <div className="bg-white shadow-md">
        <div className="max-w-[1240px] mx-auto py-4 flex flex-col items-center">
          <a href="/">
            <img src={logo} alt="Logo" className="h-16 mb-4" />
          </a>
          <div className="w-full flex justify-center items-center relative">
            <ul className="flex space-x-4 text-gray-700">
              <li><a href="/" className="hover:text-green-700">MAKEUP</a></li>
              <li><a href="/skincare" className="hover:text-green-700">SKINCARE</a></li>
              <li><a href="/refills" className="hover:text-green-700">REFILLS</a></li>
              <li><a href="/accessories" className="hover:text-green-700">ACCESSORIES</a></li>
              <li><a href="/sets" className="hover:text-green-700">SETS & BUNDLES</a></li>
              <li><a href="/discover" className="hover:text-green-700">DISCOVER</a></li>
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
    </div>
  );
};

export default HeadNavbar;

