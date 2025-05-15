'use client';

import { Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { toast } from 'react-hot-toast';

export default function WishlistButton({ product }) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isWishlisted) {
      removeFromWishlist(product.id);
      toast.success('Removed from wishlist!', {
        duration: 2000,
        position: 'top-center',
        style: {
          background: '#4F46E5',
          color: '#fff',
          borderRadius: '8px',
        },
      });
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist!', {
        duration: 2000,
        position: 'top-center',
        style: {
          background: '#4F46E5',
          color: '#fff',
          borderRadius: '8px',
        },
      });
    }
  };

  return (
    <button
      onClick={handleWishlistClick}
      className={`p-2 rounded-full transition-all duration-300 ${
        isWishlisted
          ? 'bg-pink-500/20 text-pink-500 hover:bg-pink-500/30'
          : 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30 hover:text-pink-500'
      }`}
      aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart
        className={`w-5 h-5 transition-transform duration-300 ${
          isWishlisted ? 'fill-current' : ''
        }`}
      />
    </button>
  );
} 