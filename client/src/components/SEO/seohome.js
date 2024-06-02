import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SEO = ({ title, description }) => (
  <HelmetProvider>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Ilustração, Produtos, Newsletter, Contacto" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://seusite.com" />
      <meta property="og:image" content="https://seusite.com/imagem.jpg" />
    </Helmet>
  </HelmetProvider>
);

export default SEO;
