import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Leaf, Heart, MapPin, ChevronRight, Clock, Moon, Sparkles } from 'lucide-react';
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

      {/* Hero / First Product Section */}
      <section id="home" className="py-10 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Product image */}
            <div className="flex justify-center order-first lg:order-last">
              <div className="media aspect-4/5 w-56 sm:w-64 lg:w-80 rounded-2xl border border-black/5 shadow-xl overflow-hidden bg-white">
                <img
                  src="/2025-09-25 22.10.49.jpg"
                  alt="Noir Roots Hair Oil - Premium 100ml bottle with natural ingredients"
                  width="320"
                  height="400"
                  loading="eager"
                />
              </div>
            </div>

            {/* Product info */}
            <div className="text-center lg:text-left">
              <p className="font-source text-xs sm:text-sm font-semibold tracking-widest uppercase text-gold mb-2">
                Noir Roots Hair Oil · 100ml
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold text-black leading-tight mb-3 lg:mb-5">
                Nature. Nourish. Shine.
              </h1>

              <p className="font-source text-black/70 mb-5 leading-relaxed text-base sm:text-lg lg:text-xl">
                A clean, nutrient-rich oil for hydrated, resilient hair and a soothed scalp.
                Crafted with premium plant-powered ingredients for visible results.
              </p>

              {/* Price + availability */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
                <span className="text-3xl font-playfair font-bold text-black">£30</span>
                <span className="bg-gold/10 text-gold text-xs font-source font-semibold px-3 py-1 rounded-full">
                  Pre-order · ships Oct 22
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6">
                <Link to="/product/noir-roots-hair-oil-100ml#top" className="btn-primary w-full sm:w-auto text-center">
                  Pre-order Now
                </Link>
                <Link to="/ingredients#top" className="btn-secondary w-full sm:w-auto text-center">
                  See Ingredients
                </Link>
              </div>

              {/* Trust strip */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 text-xs font-source text-black/60">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-1">
                    {badge.icon}
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits — secondary detail, below the fold */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 lg:mt-16 text-sm font-source">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg border border-black/5 shadow-md p-4 flex items-start space-x-2">
                <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                <div>
                  <h3 className="font-semibold text-black">{benefit.title}</h3>
                  <p className="text-black/60 text-xs">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section id="buy" className="py-16 bg-white">
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
      <section id="how-to-use" className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-black mb-4">
              How to Use Your Hair Oil
            </h2>
            <p className="text-lg font-source text-black/70">
              Three versatile ways to transform your hair care routine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair font-semibold text-black">Pre-wash Treatment</h3>
                <Clock className="text-gold" size={20} />
              </div>
              <p className="font-source text-black/70 text-sm">
                Apply 5-8 drops to dry hair 30-60 minutes before washing. Perfect for weekly deep conditioning.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair font-semibold text-black">Overnight Intensive</h3>
                <Moon className="text-gold" size={20} />
              </div>
              <p className="font-source text-black/70 text-sm">
                Apply to damp hair before bed, wrap in silk scarf. Maximum hydration and growth support.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair font-semibold text-black">Finishing Touch</h3>
                <Sparkles className="text-gold" size={20} />
              </div>
              <p className="font-source text-black/70 text-sm">
                Use 2-3 drops on damp or dry hair ends for instant shine and frizz control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-black mb-4">
            Pure Ingredients, Powerful Results
          </h2>
          <p className="text-lg font-source text-black/70 mb-8">
            Seven carefully selected plant-powered ingredients for visible results
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {[
              { name: 'Coconut Oil', benefit: 'Deep penetration and moisture retention' },
              { name: 'Sweet Almond Oil', benefit: 'Softens and adds natural shine' },
              { name: 'Jojoba Oil', benefit: 'Balances scalp oils naturally' },
              { name: 'Amla Oil', benefit: 'Vitamin C-rich strength and thickness' },
              { name: 'Rosemary Oil', benefit: 'Stimulates growth and circulation' },
              { name: 'Lavender Oil', benefit: 'Calms scalp and strengthens strands' },
              { name: 'Vitamin E', benefit: 'Antioxidant protection and nourishment' }
            ].map((ingredient, index) => (
              <div key={index} className="bg-cream p-4 rounded-lg">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="text-gold" size={20} />
                </div>
                <h3 className="font-playfair font-semibold text-black mb-2 text-sm">
                  {ingredient.name}
                </h3>
                <p className="font-source text-black/70 text-xs">
                  {ingredient.benefit}
                </p>
              </div>
            ))}
          </div>
          
          <Link to="/ingredients#top" className="btn-secondary inline-block">
            View Full Ingredient Details
          </Link>
        </div>
      </section>

      {/* My Story Section */}
      <section id="my-story" className="py-16 bg-cream" data-section="story">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-black mb-4">
              From Broken Strands to Noir Roots
            </h2>
            <p className="text-lg font-source text-black/70">
              The personal journey behind our premium hair oil
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            {/* Founder image + byline (left), full story (right) */}
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="w-40 md:w-48 flex-shrink-0 mx-auto md:mx-0">
                <div className="media aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/Untitled design (38).png"
                    alt="Joseph Castillo, Founder of Noir Roots"
                    width="192"
                    height="192"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <p className="font-playfair text-black font-semibold">
                    Joseph Castillo
                  </p>
                  <p className="font-source text-gold text-sm">
                    Founder & Creator
                  </p>
                </div>
              </div>

              <div className="flex-1 space-y-4 font-source text-black/80 leading-relaxed">
                <p>
                  For years, I searched for the "perfect" hair oil. Instead of healthy hair, I got brittle strands,
                  scalp irritation, and chunks of hair falling out. Mass-produced formulas filled with harsh synthetics
                  weren't nourishing my hair—they were suffocating it.
                </p>

                <p className="font-semibold text-gold">
                  If I couldn't find a product I trusted, I would create one.
                </p>

                <p>
                  Armed with determination, I turned to nature's wisdom. Months of research, blending, and testing
                  in my kitchen led to this powerful, synergistic blend of premium natural oils. This wasn't just
                  a product—it was my salvation.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link to="/about#top" className="btn-secondary">
                Read My Full Story
              </Link>
            </div>
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
                <Heart className="text-black/30" size={32} />
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