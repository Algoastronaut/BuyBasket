'use client';

import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import WishlistButton from './WishlistButton';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const { user } = useAuth();
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = () => {
    if (!user) {
      toast.error('Sign in first to add to cart!', {
        duration: 2000,
        position: 'top-center',
        style: {
          background: '#4F46E5',
          color: '#fff',
          borderRadius: '8px',
        },
      });
      return;
    }
    addItem(product);
  };

  return (
    <div className="overflow-hidden group transition-all duration-300">
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
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <WishlistButton product={product} />
        </div>
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
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 min-h-[3.5rem]">
          {product.title}
        </h3>
        <div className="flex items-center justify-between mb-4">
          <p className="text-2xl font-bold text-purple-400">
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