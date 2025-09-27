import React from 'react';
import { Droplets, Shield, TrendingUp, Sparkles, Heart } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Droplets className="text-deep-green" size={24} />,
      title: "Deep Hydration",
      description: "Penetrates hair shaft for lasting moisture and softness"
    },
    {
      icon: <TrendingUp className="text-deep-green" size={24} />,
      title: "Promotes Growth",
      description: "Stimulates scalp circulation for healthy hair growth"
    },
    {
      icon: <Shield className="text-sand" size={24} />,
      title: "Reduces Breakage",
      description: "Strengthens hair from root to tip, preventing damage"
    },
    {
      icon: <Heart className="text-sand" size={24} />,
      title: "Scalp Soothing",
      description: "Calms irritation and maintains healthy scalp balance"
    },
    {
      icon: <Sparkles className="text-deep-green" size={24} />,
      title: "Shine & Repair",
      description: "Natural oils create lustrous, healthy-looking hair"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
            Five Ways to Healthier Hair
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center bg-porcelain p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-playfair font-semibold text-charcoal mb-2">
                {benefit.title}
              </h3>
              <p className="font-source text-charcoal/70 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;