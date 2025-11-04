import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <footer className="bg-black text-cream py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <img 
              src="/Untitled design (48).png" 
              alt="Noir Roots" 
              className="h-16 w-auto mb-4"
              width="160"
              height="64"
            />
            <p className="font-source text-cream/80 text-sm mb-4">
              Premium plant-powered hair oil for nature-loving hair care enthusiasts.
            </p>
            
            {/* Newsletter Signup */}
            <form 
              onSubmit={handleNewsletterSubmit}
              data-netlify="true"
              name="newsletter"
              className="flex flex-col sm:flex-row gap-2 max-w-md"
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2 bg-cream text-black rounded-lg font-source text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                className="bg-gold text-black px-4 py-2 rounded-lg font-source font-semibold text-sm hover:bg-gold/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
            {isSubmitted && (
              <p className="text-gold text-sm mt-2">Thank you for subscribing!</p>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-source font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm font-source text-cream/80">
              <p>Noir Roots Ltd</p>
              <p>51 Pinfold Street</p>
              <p>Birmingham, B2 4AY</p>
              <p>United Kingdom</p>
              <a 
                href="mailto:thenoirroot@gmail.com"
                className="text-gold hover:text-gold/80 transition-colors flex items-center gap-1 mt-3"
              >
                <Mail size={16} />
                thenoirroot@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-source font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/policies" className="font-source text-cream/80 hover:text-cream transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/policies" className="font-source text-cream/80 hover:text-cream transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/policies" className="font-source text-cream/80 hover:text-cream transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/faq" className="font-source text-cream/80 hover:text-cream transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-source font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-cream/80 hover:text-cream transition-colors">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-cream/80 hover:text-cream transition-colors">
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-cream/80 hover:text-cream transition-colors">
                  <Youtube size={20} />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center">
          <p className="font-source text-cream/70 text-sm">
            © 2025 Noir Roots Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;