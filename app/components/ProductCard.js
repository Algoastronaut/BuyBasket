'use client';

import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Heart } from 'lucide-react';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className={`object-contain p-4 group-hover:scale-110 transition-transform duration-300 ${
            imageError ? 'hidden' : ''
          }`}
          onError={() => setImageError(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
        />
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <p className="text-center">Image not available</p>
          </div>
        )}
        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Tag */}
        <div className="mb-3">
          <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Title and Price */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">
          {product.title}
        </h3>
        <div className="flex items-center justify-between mb-4">
          <p className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </p>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-medium
                   flex items-center justify-center gap-2 hover:from-purple-700 hover:to-blue-700 
                   transform hover:-translate-y-1 transition-all duration-300"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 