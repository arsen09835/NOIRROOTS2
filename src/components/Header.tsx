import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/#top' },
    { name: 'Shop', href: '/shop#top' },
    { name: 'Ingredients', href: '/ingredients#top' },
    { name: 'How to Use', href: '/how-to-use#top' },
    { name: 'About', href: '/about#top' },
    { name: 'Contact', href: '/contact#top' },
  ];

  const isActive = (href: string) => {
    const path = href.split('#')[0] || '/';
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-cream/95 backdrop-blur-sm border-b border-black/10 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/#top"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            aria-label="Go to Home"
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
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-source font-medium transition-colors ${
                  isActive(item.href) ? 'text-gold' : 'text-black hover:text-gold'
                }`}
              >
                {item.name}
              </Link>
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
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-source font-medium transition-colors ${
                    isActive(item.href) ? 'text-gold' : 'text-black hover:text-gold'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
