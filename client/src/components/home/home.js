import React from 'react';
import Hero from '../home/Hero';
import Footer from '../common/Footer';
import HeadNavbar from '../common/HeadNavbar';
import Navbar from '../common/Navbar';


function Home() {
  return (
    <div className="bg-gray-900">
      <HeadNavbar />
      <Navbar />
      <Hero />
      <Footer />
      
    </div>
  );
}

export default Home;
