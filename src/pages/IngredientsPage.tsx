import React from 'react';
import { Helmet } from 'react-helmet-async';

const IngredientsPage = () => {
  const ingredients = [
    {
      name: "Coconut Oil",
      benefit: "Deeply penetrates hair shaft to prevent protein loss and provide lasting moisture",
      sensory: "Lightweight, non-greasy absorption",
      image: "/coconut.png"
    },
    {
      name: "Sweet Almond Oil", 
      benefit: "Softens and soothes hair while adding incredible natural shine",
      sensory: "Silky smooth texture, subtle nutty aroma",
      image: "/almond.png"
    },
    {
      name: "Jojoba Oil",
      benefit: "Mimics scalp's natural sebum to balance moisture and reduce excess oil",
      sensory: "Fast-absorbing, weightless feel",
      image: "/composizione-sana-per-il-trattamento-dell-olio-di-jojoba (1).jpg"
    },
    {
      name: "Amla Oil",
      benefit: "Vitamin C-rich powerhouse that reduces breakage and promotes thicker hair",
      sensory: "Rich, nourishing texture with earthy notes",
      image: "/Amla.png"
    },
    {
      name: "Rosemary Oil",
      benefit: "Stimulates hair follicles and scalp circulation to encourage new growth",
      sensory: "Invigorating herbal scent, warming sensation",
      image: "/5960832836804135601.jpg"
    },
    {
      name: "Lavender Oil",
      benefit: "Calms irritated scalp while strengthening hair strands from root to tip",
      sensory: "Soothing floral fragrance, gentle cooling effect",
      image: "/jojoba (1).png"
    },
    {
      name: "Vitamin E",
      benefit: "Powerful antioxidant protection against environmental damage and free radicals",
      sensory: "Invisible protection, enhanced smoothness",
      image: "/OIP.webp"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ingredients - Noir Roots | Pure Plant-Powered Hair Care</title>
        <meta name="description" content="Discover the power of our 7 carefully selected ingredients: Coconut, Almond, Jojoba, Amla, Rosemary, Lavender oils plus Vitamin E." />
      </Helmet>

      <div className="pt-20 pb-16 bg-cream min-h-screen">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-playfair font-bold text-black mb-4">
              Pure Ingredients, Powerful Results
            </h1>
            <p className="text-lg font-source text-black/70 max-w-2xl mx-auto">
              Seven carefully selected plant-powered ingredients, each chosen for its proven benefits and sensory experience.
            </p>
          </div>

          {/* Clean Promise */}
          <div className="flex flex-wrap justify-center gap-4 text-sm font-source text-black/60 mb-12">
            <span className="bg-white px-4 py-2 rounded-full border border-black/10">No Parabens</span>
            <span className="bg-white px-4 py-2 rounded-full border border-black/10">No Sulfates</span>
            <span className="bg-white px-4 py-2 rounded-full border border-black/10">No Mineral Oil</span>
            <span className="bg-white px-4 py-2 rounded-full border border-black/10">No Silicones</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-black/10 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="media aspect-square sm:aspect-4/5">
                  <img 
                    src={ingredient.image} 
                    alt={`${ingredient.name} - Natural hair care ingredient`}
                    width="300"
                    height="375"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-playfair font-bold text-black mb-2 sm:mb-3 text-lg sm:text-xl">
                    {ingredient.name}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-source font-semibold text-black/80 text-sm mb-1">What it does:</h4>
                      <p className="font-source text-black/70 text-sm leading-relaxed">
                        {ingredient.benefit}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-source font-semibold text-black/80 text-sm mb-1">Sensory experience:</h4>
                      <p className="font-source text-gold text-sm italic">
                        {ingredient.sensory}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why These Ingredients */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-playfair font-bold text-black mb-6 text-center">
              Why These Seven?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-playfair font-semibold text-black mb-3">Synergistic Blend</h3>
                <p className="font-source text-black/80 text-sm leading-relaxed">
                  Each ingredient was chosen not just for its individual benefits, but for how it works together with the others. 
                  Light oils like jojoba provide the base, while richer oils like amla deliver deep nourishment.
                </p>
              </div>
              <div>
                <h3 className="font-playfair font-semibold text-black mb-3">Proven by Experience</h3>
                <p className="font-source text-black/80 text-sm leading-relaxed">
                  This isn't a random collection of trendy ingredients. Every oil in this blend was tested, refined, and proven 
                  through months of personal use and real results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IngredientsPage;