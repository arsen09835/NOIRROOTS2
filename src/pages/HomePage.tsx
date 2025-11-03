import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Leaf, Heart, MapPin, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';

const HomePage = () => {
  const benefits = [
    {
      icon: <Leaf className="text-gold" size={24} />,
      title: "Deep Hydration",
      description: "Penetrates hair shaft for lasting moisture and softness"
    },
    {
      icon: <Heart className="text-gold" size={24} />,
      title: "Growth Support", 
      description: "Stimulates scalp circulation for healthy hair growth"
    },
    {
      icon: <Shield className="text-gold" size={24} />,
      title: "Scalp Calm",
      description: "Soothes irritation and maintains healthy scalp balance"
    },
    {
      icon: <Leaf className="text-gold" size={24} />,
      title: "Natural Shine",
      description: "Creates lustrous, healthy-looking hair naturally"
    }
  ];

  const trustBadges = [
    { text: "Allergy Notice", icon: <Shield size={16} /> },
    { text: "Clean Ingredients", icon: <Leaf size={16} /> },
    { text: "Small-Batch", icon: <Heart size={16} /> },
    { text: "UK-based", icon: <MapPin size={16} /> }
  ];

  return (
    <>
      <Helmet>
        <title>Noir Roots - Premium Plant-Powered Hair Oil | Nature. Nourish. Shine.</title>
        <meta name="description" content="Transform your hair with Noir Roots premium hair oil. Clean ingredients, small-batch quality. Pre-orders open, dispatching October 22." />
        <meta property="og:title" content="Noir Roots - Premium Plant-Powered Hair Oil" />
        <meta property="og:description" content="Nature. Nourish. Shine. Premium hair oil with clean ingredients." />
        <meta property="og:image" content="/2025-09-25 22.10.49.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Noir Roots",
            "url": "https://noirroots.com",
            "logo": "/Untitled design (47).png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "",
              "contactType": "customer service",
              "email": "thenoirroot@gmail.com"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "51 Pinfold Street",
              "addressLocality": "Birmingham",
              "postalCode": "B2 4AY",
              "addressCountry": "GB"
            }
          })}
        </script>
      </Helmet>

      {/* Pre-order Banner */}
      <div className="bg-gold text-black py-2 text-center font-source font-semibold text-sm mt-16">
        Pre-orders open, dispatching October 22
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cream to-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-black leading-tight mb-6">
                Nature. Nourish. Shine.
              </h1>
              
              <p className="text-lg sm:text-xl font-source text-black/70 mb-8 leading-relaxed">
                A clean, nutrient-rich oil for hydrated, resilient hair and a soothed scalp. 
                Crafted with premium plant-powered ingredients for visible results.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8 text-sm font-source">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                    <div>
                      <h3 className="font-semibold text-black">{benefit.title}</h3>
                      <p className="text-black/60 text-xs">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 mb-8">
                <Link to="/shop" className="btn-primary">
                  Shop Now
                </Link>
                <Link to="/ingredients" className="btn-secondary">
                  See Ingredients
                </Link>
              </div>

              {/* Trust Strip */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-source text-black/60">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-1">
                    {badge.icon}
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="media aspect-4/5 w-80 rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="/2025-09-25 22.10.49.jpg" 
                  alt="Noir Roots Hair Oil - Premium 100ml bottle with natural ingredients"
                  width="320"
                  height="400"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-black mb-4">
            Featured Product
          </h2>
          <p className="text-lg font-source text-black/70 mb-12">
            Our signature hair oil, carefully crafted for all hair types
          </p>
          
          <div className="max-w-sm mx-auto">
            <ProductCard
              name="Noir Roots Hair Oil"
              size="100ml"
              price="£30"
              image="/2025-09-25 22.10.49.jpg"
              slug="noir-roots-hair-oil-100ml"
              isPreOrder={true}
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/ingredients" className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair font-semibold text-black">Pure Ingredients</h3>
                <ChevronRight className="text-gold group-hover:translate-x-1 transition-transform" size={20} />
              </div>
              <p className="font-source text-black/70 text-sm">
                Discover the power of coconut, almond, jojoba, amla, rosemary, lavender, and vitamin E.
              </p>
            </Link>

            <Link to="/how-to-use" className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair font-semibold text-black">How to Use</h3>
                <ChevronRight className="text-gold group-hover:translate-x-1 transition-transform" size={20} />
              </div>
              <p className="font-source text-black/70 text-sm">
                Learn the three application modes: pre-wash, overnight, and finishing touches.
              </p>
            </Link>

            <Link to="/about" className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair font-semibold text-black">Our Story</h3>
                <ChevronRight className="text-gold group-hover:translate-x-1 transition-transform" size={20} />
              </div>
              <p className="font-source text-black/70 text-sm">
                From broken strands to healthy hair - discover the journey behind Noir Roots.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-black mb-4">
            Join Our Community
          </h2>
          <p className="text-lg font-source text-black/70 mb-8">
            Share your hair transformation with #NoirRoots
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="media aspect-square bg-black/5 rounded-lg flex items-center justify-center">
                <Instagram className="text-black/30" size={32} />
              </div>
            ))}
          </div>
          
          <p className="font-source text-black/60 text-sm mt-6">
            User-generated content coming soon
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;