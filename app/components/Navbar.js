'use client';

import Link from 'next/link';
import { ShoppingCart, ShoppingBasket, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const Navbar = () => {
  const { state } = useCart();
  const { wishlist } = useWishlist();
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 shadow-lg relative">
      {/* Decorative light effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.05)_25%,transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 p-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <ShoppingBasket className="w-8 h-8 text-gray-900" />
            </div>
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Buy</span>
              <span className="text-2xl font-bold text-yellow-300 group-hover:text-yellow-400 transition-colors">Basket</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-yellow-300 transition-colors relative group"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link 
              href="/products" 
              className="text-gray-300 hover:text-yellow-300 transition-colors relative group"
            >
              Products
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-yellow-300 transition-colors relative group"
            >
              About
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link 
              href="/wishlist" 
              className="relative text-gray-300 hover:text-yellow-300 transition-colors group"
            >
              <Heart className="w-6 h-6" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-gray-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-bounce">
                  {wishlist.length}
                </span>
              )}
            </Link>
            
            {/* Cart Icon */}
            <Link 
              href="/cart" 
              className="relative group"
            >
              <div className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <ShoppingCart className="w-6 h-6 text-gray-300 group-hover:text-yellow-300 transition-colors" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-300 text-gray-900 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-bounce">
                    {itemCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 