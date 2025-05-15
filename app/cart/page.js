'use client';

import { useCart } from '../context/CartContext';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';

export default function CartPage() {
  const { state, removeItem, updateQuantity, checkout } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-white mb-4">Your cart is empty</h2>
        <p className="text-gray-300 mb-8">Add some products to your cart to see them here.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>
      <div className="space-y-6">
        {state.items.map((item) => (
          <div 
            key={item.id} 
            className="flex items-center gap-6 bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
          >
            <div className="relative h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-purple-400 font-medium">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg p-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 rounded-md hover:bg-white/20 transition-colors text-white"
                  disabled={item.quantity <= 1}
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="text-white font-medium min-w-[2rem] text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 rounded-md hover:bg-white/20 transition-colors text-white"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                aria-label="Remove item"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl text-gray-300">Total:</span>
          <span className="text-2xl font-bold text-white">${state.total.toFixed(2)}</span>
        </div>
        <button
          onClick={checkout}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium
                   hover:from-purple-700 hover:to-blue-700 transform hover:-translate-y-1 
                   transition-all duration-300 flex items-center justify-center gap-2"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
} 