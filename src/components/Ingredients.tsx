import React, { useEffect, useState } from 'react';

const Ingredients = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('ingredients');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const ingredients = [
    {
      name: "Coconut Oil",
      benefit: "Deeply penetrates and prevents protein loss.",
      image: "/coconut.png"
    },
    {
      name: "Almond Oil",
      benefit: "Softens, soothes, and adds an incredible shine.",
      image: "/almond.png"
    },
    {
      name: "Jojoba Oil",
      benefit: "Mimics the scalp's natural oils and balances moisture.",
      image: "/composizione-sana-per-il-trattamento-dell-olio-di-jojoba (1).jpg"
    },
    {
      name: "Amla Oil (my secret weapon!)",
      benefit: "Its legendary, vitamin-C-rich strength reduces breakage and thickens hair.",
      image: "/Amla.png"
    },
    {
      name: "Rosemary Oil",
      benefit: "Stimulates follicles and encourages new growth.",
      image: "/5960832836804135601.jpg"
    },
    {
      name: "Lavender Oil",
      benefit: "Calms the scalp and strengthens strands.",
      image: "/jojoba (1).png"
    }
  ];

  return (
    <section id="ingredients" className="py-16 bg-porcelain">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
            Pure Ingredients, Powerful Results
          </h2>
          <p className="text-lg font-source text-charcoal/70 mb-8">
            Each ingredient carefully selected for maximum hair health benefits
          </p>
          
          {/* Clean Promise */}
          <div className="flex flex-wrap justify-center gap-4 text-sm font-source text-charcoal/60">
            <span className="bg-white px-4 py-2 rounded-full border border-sand/30">No Parabens</span>
            <span className="bg-white px-4 py-2 rounded-full border border-sand/30">No Sulfates</span>
            <span className="bg-white px-4 py-2 rounded-full border border-sand/30">No Mineral Oil</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((ingredient, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 border border-sand/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={ingredient.image} 
                alt={ingredient.name}
                className="w-full h-32 rounded-lg object-cover mb-4 border border-sand/20"
              />
              <h3 className="font-playfair font-semibold text-charcoal mb-2 text-lg">
                {ingredient.name}
              </h3>
              <p className="font-source text-charcoal/70 text-sm">
                {ingredient.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;