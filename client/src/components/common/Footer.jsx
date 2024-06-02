import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from "../images/logo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className='border-t border-gray-700 max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black'>
      <div className="flex items-center">
        <div className="navbar-logo mr-4">
          <a href="/">
            <img src={logo} alt="Logo" className="h-14 pl-2" />
          </a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-black'>{t('support')}</h6>
          <ul>
            <li className='py-2 text-sm'><a href="/testeai">{t('faq')}</a></li>
            <li className='py-2 text-sm'><a href="/rastrear">{t('trackOrder')}</a></li>
            <li className='py-2 text-sm'><a href="/envio">{t('shipping')}</a></li>
            <li className='py-2 text-sm'><a href="/contacto">{t('contact')}</a></li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-black'>Ilustra</h6>
          <ul>
            <li className='py-2 text-sm'><a href="/sobre">{t('about')}</a></li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-black'>{t('legal')}</h6>
          <ul>
            <li className='py-2 text-sm'><a href="/termoscondicoes">{t('termsConditions')}</a></li>
            <li className='py-2 text-sm'><a href="/programarecompensas">{t('rewardsProgram')}</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
