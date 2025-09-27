import React from 'react';
import { Hand, Droplets, Sparkles, CalendarCheck } from 'lucide-react';

const HowToUse = () => {
  const steps = [
    {
      icon: <Hand className="text-deep-green" size={24} />,
      title: "Apply to Palm",
      description: "Apply Noir Roots Hair Oil to your palm."
    },
    {
      icon: <Droplets className="text-sand" size={24} />,
      title: "Massage Scalp",
      description: "Massage into your scalp gently."
    },
    {
      icon: <Sparkles className="text-deep-green" size={24} />,
      title: "Apply to Hair & Ends",
      description: "Work through hair lengths and ends."
    },
    {
      icon: <CalendarCheck className="text-sand" size={24} />,
      title: "Use 2–3× Weekly",
      description: "Use 2–3 times per week for amazing results."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
            How to Use
          </h2>
          <p className="text-lg font-source text-charcoal/70">
            Simple steps for healthier hair
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-porcelain rounded-full flex items-center justify-center border-2 border-sand/30" aria-hidden="true">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-charcoal mb-2">
                {step.title}
              </h3>
              <p className="font-source text-charcoal/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUse;