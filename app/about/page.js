'use client';

import Image from 'next/image';
import { Package, Truck, Shield, Star, Heart, Clock, Mail, Phone } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:linear-gradient(0deg,transparent,white,transparent)]"></div>
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-yellow-300">BuyBasket</span>
          </h1>
          <p className="text-xl text-gray-100">
            Your trusted destination for quality products and exceptional shopping experience.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Our Story
        </h2>
        <div className="prose prose-lg prose-invert mx-auto">
          <p>
            Founded in 2023, BuyBasket emerged from a simple yet powerful idea: to create a shopping experience that's both delightful and trustworthy. We believe that online shopping should be more than just transactions—it should be an experience that customers look forward to.
          </p>
          <p>
            Our journey began with a small team of passionate individuals who shared a common vision: to revolutionize the way people shop online. Today, we're proud to serve thousands of customers worldwide, offering a carefully curated selection of products that meet our high standards of quality and value.
          </p>
        </div>
      </div>

      {/* Our Commitments */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-blue-600/10 rounded-3xl" />
        <div className="relative py-16 px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Commitments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group relative rounded-2xl overflow-hidden h-[28rem] shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&q=80"
                alt="Fast Shipping"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform transition-all duration-500 group-hover:-translate-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                      <Truck className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Fast Shipping
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    Get your orders delivered quickly with our efficient shipping network. Track your package in real-time.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden h-[28rem] shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
                alt="Curated Selection"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform transition-all duration-500 group-hover:-translate-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                      <Star className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Curated Selection
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    Carefully selected products that meet our high standards of quality and value.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden h-[28rem] shadow-2xl hover:shadow-pink-500/20 transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="Customer Satisfaction"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform transition-all duration-500 group-hover:-translate-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-pink-600/20 rounded-lg group-hover:bg-pink-600/30 transition-colors">
                      <Heart className="w-6 h-6 text-pink-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Customer Satisfaction
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    Your satisfaction is our priority. We're here to help you with any questions or concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-600/20 rounded-xl">
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Email Us</h3>
            </div>
            <p className="text-gray-300 text-lg">
              Have questions? Send us an email at support@buybasket.com
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-600/20 rounded-xl">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Call Us</h3>
            </div>
            <p className="text-gray-300 text-lg">
              Our support team is available 24/7 at (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 