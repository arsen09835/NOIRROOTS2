import React from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-green text-porcelain py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <img 
              src="/Untitled design (48).png" 
              alt="Noir Roots" 
              className="h-16 w-auto mb-4"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-source font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="font-source text-porcelain/70 hover:text-porcelain transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="font-source text-porcelain/70 hover:text-porcelain transition-colors">Terms of Service</a></li>
              <li><a href="#" className="font-source text-porcelain/70 hover:text-porcelain transition-colors">Shipping Info</a></li>
              <li><a href="#" className="font-source text-porcelain/70 hover:text-porcelain transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-source font-semibold mb-4">Follow Leon</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-porcelain/70 hover:text-porcelain transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-porcelain/70 hover:text-porcelain transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-porcelain/70 hover:text-porcelain transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-porcelain/20 mt-8 pt-8 text-center">
          <p className="font-source text-porcelain/70 text-sm">
            © 2025 Noir Roots Hair Oil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;