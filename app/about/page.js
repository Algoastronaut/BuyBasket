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
            Founded in 2023, BuyBasket emerged from a simple yet powerful idea: to create a shopping experience that&apos;s both delightful and trustworthy. We believe that online shopping should be more than just transactions—it should be an experience that customers look forward to.
          </p>
          <p>
            Our journey began with a small team of passionate individuals who shared a common vision: to revolutionize the way people shop online. Today, we&apos;re proud to serve thousands of customers worldwide, offering a carefully curated selection of products that meet our high standards of quality and value.
          </p>
        </div>
      </div>

      {/* Our Commitments */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-blue-600/10 rounded-3xl" />
        <div className="relative max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Commitments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-8 hover:bg-black/90 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-purple-600/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Truck className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Fast Shipping</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Experience lightning-fast delivery with our optimized shipping network. Track your package in real-time and enjoy doorstep delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-8 hover:bg-black/90 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-blue-600/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Quality Products</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Every product is carefully selected to ensure the highest quality standards. Shop with confidence knowing you&apos;re getting the best.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-8 hover:bg-black/90 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-pink-600/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Customer First</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Your satisfaction is our top priority. Our dedicated support team is always ready to assist you with any questions or concerns.
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