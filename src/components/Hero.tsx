import React, { useEffect, useState } from 'react';
import { Shield, Leaf, Heart, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToIngredients = () => {
    const ingredientsSection = document.getElementById('ingredients');
    ingredientsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-porcelain to-white flex items-center relative overflow-hidden pt-16">
      {/* Subtle background texture */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundImage: 'url("https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=1200")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-charcoal leading-tight mb-6">
              Nourish, Strengthen, Shine — 
              <span className="text-deep-green"> Naturally</span>
            </h1>
            
            <p className="text-lg sm:text-xl font-source text-charcoal/70 mb-8 leading-relaxed max-w-2xl">
              A clean, nutrient-rich oil for hydrated, resilient hair and a soothed scalp.
            </p>

            <div className="mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                <span className="text-3xl font-playfair font-bold text-charcoal">€29</span>
                <span className="text-sm font-source text-charcoal/60">• Free shipping over €50</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={scrollToIngredients}
                  className="border-2 border-deep-green text-deep-green px-6 py-3 rounded-lg font-source font-semibold hover:bg-deep-green hover:text-porcelain transition-all duration-300 text-base w-full sm:w-auto"
                >
                  See Ingredients
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-source text-charcoal/60">
              <div className="flex items-center space-x-2">
                <Leaf size={16} className="text-deep-green" />
                <span>Natural</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart size={16} className="text-sand" />
                <span>Cruelty-Free</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield size={16} className="text-deep-green" />
                <span>30-Day Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column - Product Image */}
          <div className="flex justify-center relative z-10">
            <div className="relative">
              <img 
                src="/2025-09-25 22.10.49.jpg" 
                alt="Noir Roots Hair Oil Bottle" 
                className="w-80 h-96 object-cover rounded-2xl shadow-2xl"
                style={{
                  transform: `translateY(${scrollY * -0.1}px)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;