import React from 'react';
import logo from "../images/logo.png";


const Footer = () => {


  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div className="flex items-center">
        <a href="/"> 
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-700 to-green-50">Conetado</h1>
        </a>

        <div className="navbar-logo mr-4">
          <a href="/"> 
          <img src={logo} alt="Logo" className="h-14 pl-2	" />
          </a>
        </div>
        </div>   

      
      <div className='lg:col-span-2 flex justify-between mt-6'>
    
    <div>
        <h6 className='font-medium text-gray-400'>Suporte</h6>
        <ul>
            <li className='py-2 text-sm'><a href="/testeai">FAQ</a></li>
        </ul>
        <ul>
            <li className='py-2 text-sm'><a href="/rastrear">Rastrear pedido</a></li>
        </ul>
        <ul>
            <li className='py-2 text-sm'><a href="/envio">Envio</a></li>
        </ul>
        <ul>
            <li className='py-2 text-sm'><a href="/contacto">Contacto</a></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Conetado</h6>
        <ul>
            <li className='py-2 text-sm'><a href="/sobre">Sobre</a></li>

        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'><a href="/termoscondicoes">Termos e Condições</a></li>
        </ul>
        <ul>
            <li className='py-2 text-sm'><a href="/programarecompensas">Programa de Recompensas</a></li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;