import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Ingredients from './components/Ingredients';
import HowToUse from './components/HowToUse';
import FounderNote from './components/FounderNote';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import VoiceglowChat from './components/VoiceglowChat';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ensure the app is fully loaded before showing content
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-porcelain transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <Hero />
      <Benefits />
      <Ingredients />
      <HowToUse />
      <FounderNote />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
      <VoiceglowChat />
    </div>
  );
}

export default App;