import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  name: string;
  size: string;
  price: string;
  image: string;
  slug: string;
  isPreOrder?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  size,
  price,
  image,
  slug,
  isPreOrder = true
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-black/10 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${slug}`}>
        <div className="media aspect-square">
          <img
            src={image}
            alt={`${name} - ${size}`}
            width="400"
            height="400"
            loading="lazy"
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${slug}`}>
          <h3 className="font-playfair font-semibold text-black mb-1 hover:text-gold transition-colors">
            {name}
          </h3>
        </Link>
        <p className="font-source text-black/70 text-sm mb-2">{size}</p>
        
        <div className="flex items-center justify-between">
          <span className="font-playfair font-bold text-lg text-black">{price}</span>
          {isPreOrder && (
            <span className="text-xs font-source text-gold bg-gold/10 px-2 py-1 rounded-full">
              Pre-order
            </span>
          )}
        </div>
        
        <Link
          to={`/product/${slug}`}
          className="btn-primary w-full text-center mt-3 block"
        >
          {isPreOrder ? 'Pre-order Now' : 'Add to Cart'}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;