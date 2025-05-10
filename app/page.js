'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, CreditCard, Shield, Sparkles } from 'lucide-react';
import ProductCard from './components/ProductCard';
import { useCart } from './context/CartContext';

export default function Home() {
  const [products] = useState([
    {
      id: 1,
      title: "Premium Wireless Headphones",
      price: 199.99,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
    },
    {
      id: 2,
      title: "Smart Fitness Watch",
      price: 149.99,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
    },
    {
      id: 3,
      title: "Designer Backpack",
      price: 79.99,
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"
    }
  ]);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:linear-gradient(0deg,transparent,white,transparent)]"></div>
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-yellow-300">BuyBasket</span>
          </h1>
          <p className="text-xl text-gray-100">
            Discover amazing products at unbeatable prices. Shop with confidence and enjoy a seamless shopping experience.
          </p>
        </div>
      </div>

      {/* Quick Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-600/20 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Wide Selection</h3>
          </div>
          <p className="text-gray-300">
            Browse through thousands of products across multiple categories
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-600/20 rounded-lg">
              <CreditCard className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Easy Payments</h3>
          </div>
          <p className="text-gray-300">
            Multiple payment options with secure checkout process
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-600/20 rounded-lg">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Secure Shopping</h3>
          </div>
          <p className="text-gray-300">
            Your data is protected with industry-standard security
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-yellow-600/20 rounded-lg">
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Best Deals</h3>
          </div>
          <p className="text-gray-300">
            Regular discounts and special offers for our customers
          </p>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative py-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:linear-gradient(0deg,transparent,white,transparent)]"></div>
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Join thousands of satisfied customers who trust BuyBasket for their shopping needs.
          </p>
          <Link 
            href="/products" 
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
