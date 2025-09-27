import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "My hair feels softer after just 2 weeks. The shine is incredible!",
      rating: 5
    },
    {
      name: "Marcus T.",
      text: "Finally found something that works. Less breakage, more growth.",
      rating: 5
    },
    {
      name: "Lisa K.",
      text: "Love how lightweight it feels. No greasy residue, just healthy hair.",
      rating: 5
    },
    {
      name: "David R.",
      text: "Been using for a month. My scalp feels so much healthier.",
      rating: 5
    },
    {
      name: "Emma J.",
      text: "Worth every penny. My hair has never looked better.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
            Real Results from Real People
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-porcelain p-4 rounded-lg shadow-sm border border-sand/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-sand fill-current" />
                    ))}
                  </div>
                  <span className="font-source font-semibold text-charcoal text-sm">
                    {testimonial.name}
                  </span>
                </div>
                <p className="font-source text-charcoal/80 text-sm">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;