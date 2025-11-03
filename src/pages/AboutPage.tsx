import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Leaf, Heart, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About - Noir Roots | Our Story & Values</title>
        <meta name="description" content="Discover the story behind Noir Roots - from broken strands to premium plant-powered hair care. Nature-first, small-batch quality." />
      </Helmet>

      <div className="pt-20 pb-16 bg-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-playfair font-bold text-black mb-4">
              Our Story
            </h1>
            <p className="text-lg font-source text-black/70">
              From broken strands to healthy hair - the journey behind Noir Roots
            </p>
          </div>

          {/* Founder Story */}
          <div className="bg-white rounded-lg p-8 mb-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 mb-8">
              <div className="media aspect-square w-32 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="/Untitled design (38).png" 
                  alt="Joseph Castillo, Founder of Noir Roots"
                  width="128"
                  height="128"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-black mb-2">
                  From Broken Strands to Noir Roots
                </h2>
                <p className="font-source text-black/70">
                  Joseph Castillo, Founder
                </p>
              </div>
            </div>

            <div className="space-y-4 font-source text-black/80 leading-relaxed">
              <p>
                For years, I was on a frantic search for the "perfect" hair oil. I tried every store-bought bottle promising lush growth, incredible shine, and miracle repairs. Instead of the healthy hair of my dreams, I was handed a nightmare. My hair became brittle, my scalp irritated, and the most terrifying part - chunks of my hair started falling out.
              </p>
              
              <p>
                I felt defeated. I was heartbroken, staring at broken strands in my brush, wondering what I had done wrong. I realized then that these mass-produced formulas, filled with silicones, alcohols, and harsh synthetics, weren't nourishing my hair; they were suffocating it.
              </p>
              
              <p>
                Enough was enough. I decided if I couldn't find a product I trusted, I would create one.
              </p>
              
              <p>
                Armed with desperation and determination, I turned to the wisdom of nature. I spent months researching, blending, and testing in my own kitchen. I wasn't interested in a quick fix; I was building a ritual. The answer wasn't in one magic ingredient, but in a powerful, synergistic blend of premium natural oils.
              </p>
              
              <p className="font-semibold text-gold">
                This blend was my game-changer.
              </p>
              
              <p>
                Slowly, then undeniably, my hair began to respond. The shedding stopped. My broken hair began to feel strong again. I saw baby hairs, then full-grown new strands, filling in the sparse areas I thought were lost forever. I had not just fixed my hair; I had brought it back to life.
              </p>
              
              <p>
                Now, I'm sharing the formula that saved my hair with you. Noir Roots is more than just a hair oil; it's the result of my journey, my frustration, and my ultimate triumph. It's crafted with intention, purity, and a deep belief in the power of nature.
              </p>
              
              <p className="font-semibold">
                This is the oil I wish I had found all those years ago.
              </p>
            </div>
          </div>

          {/* Brand Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-gold" size={24} />
              </div>
              <h3 className="font-playfair font-semibold text-black mb-2">Nature-First</h3>
              <p className="font-source text-black/70 text-sm">
                We believe in the power of pure, plant-based ingredients that work in harmony with your hair's natural needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-gold" size={24} />
              </div>
              <h3 className="font-playfair font-semibold text-black mb-2">Small-Batch Quality</h3>
              <p className="font-source text-black/70 text-sm">
                Every bottle is carefully crafted in small batches to ensure the highest quality and freshness.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-gold" size={24} />
              </div>
              <h3 className="font-playfair font-semibold text-black mb-2">Proven Results</h3>
              <p className="font-source text-black/70 text-sm">
                Born from personal experience and refined through real results, not marketing promises.
              </p>
            </div>
          </div>

          {/* Brand Promise */}
          <div className="bg-gold/10 p-8 rounded-lg text-center border border-gold/20">
            <h2 className="text-2xl font-playfair font-bold text-black mb-4">
              Our Promise
            </h2>
            <p className="font-source text-black/80 leading-relaxed max-w-2xl mx-auto">
              We're committed to creating hair care that honors both your hair and the planet. Every ingredient is chosen for its proven benefits, 
              every bottle is made with care, and every customer is part of our journey toward healthier, happier hair.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;