'use client';

import ProductCard from './ProductCard';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';

const ProductsGrid = ({ products }) => {
  const { user } = useAuth();
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <p className="text-lg text-gray-300 mb-4">Please log in to view and add products to your cart.</p>
        <Link href="/login" className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all">Login</Link>
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fadeIn"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <ProductCard
              product={{
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                category: product.category,
              }}
            />
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default ProductsGrid; 