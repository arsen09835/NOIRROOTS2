import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Minus, Plus, Shield, Leaf, Clock, Droplets } from 'lucide-react';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Product data (in a real app, this would come from an API)
  const product = {
    name: "Noir Roots Hair Oil",
    size: "100ml",
    price: "£30",
    images: [
      "/2025-09-25 22.10.49.jpg",
      "/2025-09-25 22.10.49.jpg", // Placeholder for additional images
      "/2025-09-25 22.10.49.jpg"
    ],
    description: "A clean, nutrient-rich oil for hydrated, resilient hair and a soothed scalp.",
    ingredients: [
      "Coconut Oil - Deeply penetrates and prevents protein loss",
      "Sweet Almond Oil - Softens, soothes, and adds incredible shine", 
      "Jojoba Oil - Mimics scalp's natural oils and balances moisture",
      "Amla Oil - Vitamin-C-rich strength reduces breakage and thickens hair",
      "Rosemary Oil - Stimulates follicles and encourages new growth",
      "Lavender Oil - Calms the scalp and strengthens strands",
      "Vitamin E - Antioxidant protection and nourishment"
    ]
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <>
      <Helmet>
        <title>{product.name} - {product.size} | Noir Roots</title>
        <meta name="description" content={`${product.description} Premium plant-powered hair oil with clean ingredients. Pre-order now for £${product.price.slice(1)}.`} />
        <meta property="og:title" content={`${product.name} - Premium Hair Oil`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.images[0]} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "description": product.description,
            "brand": {
              "@type": "Brand",
              "name": "Noir Roots"
            },
            "offers": {
              "@type": "Offer",
              "price": product.price.slice(1),
              "priceCurrency": "GBP",
              "availability": "https://schema.org/PreOrder",
              "seller": {
                "@type": "Organization",
                "name": "Noir Roots"
              }
            },
            "image": product.images
          })}
        </script>
      </Helmet>

      <div className="pt-20 pb-16 bg-cream min-h-screen">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Pre-order Banner */}
          <div className="bg-gold text-black py-3 px-6 rounded-lg text-center font-source font-semibold mb-8">
            Pre-orders open, dispatching October 22
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Gallery */}
            <div>
              <div className="media aspect-4/5 mb-4 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={product.images[selectedImage]}
                  alt={`${product.name} - View ${selectedImage + 1}`}
                  width="500"
                  height="625"
                  loading="eager"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`media aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-gold' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - Thumbnail ${index + 1}`}
                      width="150"
                      height="150"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-playfair font-bold text-black mb-2">
                {product.name}
              </h1>
              <p className="font-source text-black/70 mb-4">{product.size}</p>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-playfair font-bold text-black">
                  {product.price}
                </span>
                <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-source font-semibold">
                  Pre-order
                </span>
              </div>

              <p className="font-source text-black/80 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="font-source font-semibold text-black">Quantity:</span>
                <div className="flex items-center border border-black/20 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-black/5 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 font-source font-semibold">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-black/5 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* CTA Button */}
              <button className="btn-primary w-full mb-6 text-lg py-4">
                Pre-order Now - {product.price}
              </button>

              <p className="font-source text-black/60 text-sm text-center mb-8">
                Dispatching October 22 • Free shipping over £50
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Shield className="text-gold" size={16} />
                  <span className="font-source text-black/70">30-day guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="text-gold" size={16} />
                  <span className="font-source text-black/70">Clean ingredients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="text-gold" size={16} />
                  <span className="font-source text-black/70">Small-batch</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Droplets className="text-gold" size={16} />
                  <span className="font-source text-black/70">All hair types</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Sections */}
          <div className="mt-16 space-y-12">
            {/* Outcome */}
            <section>
              <h2 className="text-2xl font-playfair font-bold text-black mb-4">What You'll Experience</h2>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-source text-black/80 leading-relaxed">
                  Transform your hair with deep hydration that penetrates each strand, promoting natural growth while soothing your scalp. 
                  Experience reduced breakage, enhanced shine, and hair that feels stronger, softer, and more resilient with every use.
                </p>
              </div>
            </section>

            {/* How to Use */}
            <section>
              <h2 className="text-2xl font-playfair font-bold text-black mb-4">How to Use</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-playfair font-semibold text-black mb-2">Pre-wash</h3>
                  <p className="font-source text-black/70 text-sm">Apply to dry hair 30 minutes before washing. Massage into scalp and lengths.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-playfair font-semibold text-black mb-2">Overnight</h3>
                  <p className="font-source text-black/70 text-sm">Apply to damp hair before bed. Wrap in silk scarf or use silk pillowcase.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-playfair font-semibold text-black mb-2">Finishing</h3>
                  <p className="font-source text-black/70 text-sm">Use 2-3 drops on damp or dry hair ends for instant shine and protection.</p>
                </div>
              </div>
            </section>

            {/* Ingredients */}
            <section>
              <h2 className="text-2xl font-playfair font-bold text-black mb-4">Pure Ingredients</h2>
              <div className="bg-white p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  {product.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Leaf className="text-gold flex-shrink-0 mt-1" size={16} />
                      <p className="font-source text-black/80 text-sm">{ingredient}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Safety */}
            <section>
              <h2 className="text-2xl font-playfair font-bold text-black mb-4">Safety Information</h2>
              <div className="bg-gold/10 p-6 rounded-lg border border-gold/20">
                <p className="font-source text-black/80 text-sm leading-relaxed">
                  <strong>Allergy Notice:</strong> This oil contains Sweet Almond Oil (tree nut-derived) and natural compounds like linalool from lavender/rosemary. 
                  Avoid use if you have nut allergies or sensitivity. For external use only. Patch test recommended before first use.
                </p>
              </div>
            </section>

            {/* Details */}
            <section>
              <h2 className="text-2xl font-playfair font-bold text-black mb-4">Product Details</h2>
              <div className="bg-white p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-source font-semibold text-black mb-2">Size & Usage</h3>
                    <ul className="font-source text-black/70 text-sm space-y-1">
                      <li>• 100ml glass bottle</li>
                      <li>• 2-3 month supply with regular use</li>
                      <li>• Suitable for all hair types</li>
                      <li>• Use 2-3 times per week</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-source font-semibold text-black mb-2">Quality Promise</h3>
                    <ul className="font-source text-black/70 text-sm space-y-1">
                      <li>• Small-batch production</li>
                      <li>• No parabens, sulfates, or mineral oil</li>
                      <li>• Cruelty-free and vegan</li>
                      <li>• Made in the UK</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;