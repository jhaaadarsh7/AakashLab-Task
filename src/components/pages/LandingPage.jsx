import React from 'react';
import Header from '../../components/Header'
import Hero from '../../components/Hero';
import About from '../../components/About';
import Team from '../../components/Team';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;