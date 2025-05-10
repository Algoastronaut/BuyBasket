'use client';

import Image from 'next/image';

const features = [
  {
    image: "/images/express-delivery.jpg",
    title: "Express Delivery",
    description: "Get your orders delivered within 24 hours with our express delivery service.",
    color: "from-blue-500 to-blue-600"
  },
  {
    image: "/images/secure-shopping.jpg",
    title: "Secure Shopping",
    description: "Shop with confidence with our 256-bit SSL secure payment system.",
    color: "from-green-500 to-green-600"
  },
  {
    image: "/images/easy-payments.jpg",
    title: "Easy Payments",
    description: "Multiple payment options including credit cards, UPI, and digital wallets.",
    color: "from-purple-500 to-purple-600"
  },
  {
    image: "/images/customer-support.jpg",
    title: "24/7 Support",
    description: "Our customer support team is always ready to help you with any queries.",
    color: "from-pink-500 to-pink-600"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden h-64 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white mb-2 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                  {feature.title}
                </h3>
                
                {/* Description - hidden by default, shown on hover */}
                <p className="text-gray-200 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 