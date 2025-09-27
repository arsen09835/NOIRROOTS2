import React from 'react';
import { Shield, Truck, RotateCcw } from 'lucide-react';

const Guarantee = () => {
  const policies = [
    {
      icon: <Shield className="text-deep-green" size={20} />,
      title: "30-Day Satisfaction Guarantee",
      description: "Not happy? Get your money back, no questions asked."
    },
    {
      icon: <Truck className="text-sand" size={20} />,
      title: "Fast & Free Shipping",
      description: "Free shipping on orders over €50. Delivered in 3-5 days."
    },
    {
      icon: <RotateCcw className="text-deep-green" size={20} />,
      title: "Easy Returns",
      description: "Simple return process with prepaid shipping labels."
    }
  ];

  return (
    <section className="py-16 bg-porcelain">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
            Risk-Free Purchase
          </h2>
          <p className="text-lg font-source text-charcoal/70">
            We stand behind our product with confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {policies.map((policy, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm border border-sand/20">
              <div className="flex justify-center mb-4">
                {policy.icon}
              </div>
              <h3 className="font-playfair font-semibold text-charcoal mb-2">
                {policy.title}
              </h3>
              <p className="font-source text-charcoal/70 text-sm">
                {policy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantee;