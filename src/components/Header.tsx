import React from 'react';

const Header = () => {
  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-porcelain/95 backdrop-blur-sm border-b border-sand/20 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={scrollToHero}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/Untitled design (47).png" 
              alt="Noir Roots Logo" 
             className="h-12 w-auto"
            />
          </button>

          {/* Buy Now CTA */}
          <button className="bg-deep-green text-porcelain px-6 py-2.5 rounded-lg font-source font-semibold hover:bg-deep-green/90 transition-all duration-300 shadow-sm hover:shadow-md">
            Buy Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;