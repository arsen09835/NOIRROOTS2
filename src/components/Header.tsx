import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navigation = [
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const homeNavigation = [
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'How to Use', href: '#how-to-use' },
    { name: 'My Story', href: '#my-story' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' },
  ];

  const currentNavigation = isHomePage ? homeNavigation : navigation;

  const isActive = (path: string) => location.pathname === path;

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const header = document.querySelector('header');
        const headerOffset = header ? header.offsetHeight : 0;
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset - 20;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-cream/95 backdrop-blur-sm border-b border-black/10 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/Untitled design (47).png" 
              alt="Noir Roots - Premium Hair Oil" 
              className="h-12 w-auto"
              width="120"
              height="48"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {currentNavigation.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="font-source font-medium text-black hover:text-gold transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-source font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-gold'
                      : 'text-black hover:text-gold'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-black hover:text-gold transition-colors">
              <ShoppingBag size={20} />
              <span className="sr-only">Shopping cart</span>
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-black hover:text-gold transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-black/10 py-4">
            <nav className="flex flex-col space-y-4">
              {currentNavigation.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleAnchorClick(e, item.href);
                      setIsMenuOpen(false);
                    }}
                    className="font-source font-medium text-black hover:text-gold transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-source font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-gold'
                        : 'text-black hover:text-gold'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;