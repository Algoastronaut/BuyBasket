'use client';

import { useCart } from '../context/CartContext';
import Image from 'next/image';

export default function CartPage() {
  const { state, dispatch } = useCart();

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity },
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id,
    });
  };

  if (state.items.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-white-900">Your cart is empty</h2>
        <p className="mt-2 text-gray-600">Add some products to your cart to see them here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white-900">Shopping Cart</h1>
      <div className="space-y-4">
        {state.items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
            <div className="relative h-24 w-24 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-1 rounded bg-gray-100 hover:bg-gray-200"
              >
                -
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 rounded bg-gray-100 hover:bg-black-200"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="p-2 text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center border-t pt-4">
        <div>
          <p className="text-lg font-semibold text-white-900">Total:</p>
          <p className="text-2xl font-bold text-blue-600">${state.total.toFixed(2)}</p>
        </div>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
} 