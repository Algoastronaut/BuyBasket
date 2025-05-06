'use client';

import ProductCard from './ProductCard';

const ProductsGrid = ({ products }) => {
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