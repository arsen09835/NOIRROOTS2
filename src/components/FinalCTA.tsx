import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-deep-green to-deep-green/90 text-porcelain">
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-playfair font-bold mb-6">
          Healthy Hair You Can See and Feel
        </h2>
        <p className="text-xl font-source mb-8 opacity-90">
          Join thousands who've transformed their hair with Noir Roots Hair Oil
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <span className="text-3xl font-playfair font-bold">€29</span>
          <span className="text-lg font-source opacity-80">• Free shipping over €50</span>
        </div>
        
        <button className="bg-porcelain text-deep-green px-12 py-4 rounded-lg font-source font-bold hover:bg-white transition-all duration-300 text-xl shadow-lg hover:shadow-xl">
          Buy Now
        </button>
        
        <p className="text-sm font-source mt-6 opacity-70">
          30-day money-back guarantee • Secure checkout • Fast delivery
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;