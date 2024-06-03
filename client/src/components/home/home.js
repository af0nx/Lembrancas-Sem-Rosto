import React from 'react';
import Hero from '../home/Hero';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import Newsletter from '../common/Newsletter';
import SEO from '../SEO/seohome';


function Home() {
  return (
    <div className="bg-gray-50">
            <SEO title="Ilustra - Seu Site" description="Bem-vindo ao nosso site de ilustrações e produtos exclusivos." />
      <Navbar />
      <Hero />
      <Newsletter />
      <Footer />
      
    </div>
  );
}

export default Home;
