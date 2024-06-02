import React from 'react';
import Hero from '../home/Hero';
import Footer from '../common/Footer';
import HeadNavbar from '../common/HeadNavbar';
import Navbar from '../common/Navbar';
import Newsletter from '../common/Newsletter';


function Home() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <Newsletter />
      <Footer />
      
    </div>
  );
}

export default Home;
