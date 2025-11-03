import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ui/ProductCard';

const ShopPage = () => {
  const products = [
    {
      id: 1,
      name: "Noir Roots Hair Oil",
      size: "100ml",
      price: "£30",
      image: "/2025-09-25 22.10.49.jpg",
      slug: "noir-roots-hair-oil-100ml",
      isPreOrder: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Shop - Noir Roots Premium Hair Care</title>
        <meta name="description" content="Shop premium plant-powered hair care products from Noir Roots. Clean ingredients, small-batch quality." />
      </Helmet>

      <div className="pt-20 pb-16 bg-cream min-h-screen">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Pre-order Banner */}
          <div className="bg-gold text-black py-3 px-6 rounded-lg text-center font-source font-semibold mb-8">
            Pre-orders open, dispatching October 22
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-playfair font-bold text-black mb-4">
              Premium Hair Care
            </h1>
            <p className="text-lg font-source text-black/70 max-w-2xl mx-auto">
              Discover our collection of clean, plant-powered hair care products crafted for healthy, beautiful hair.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                size={product.size}
                price={product.price}
                image={product.image}
                slug={product.slug}
                isPreOrder={product.isPreOrder}
              />
            ))}
          </div>

          {/* Coming Soon */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-playfair font-semibold text-black mb-4">
              More Products Coming Soon
            </h2>
            <p className="font-source text-black/70">
              We're working on expanding our collection of premium hair care essentials.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;