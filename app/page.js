import Link from 'next/link';
import { ShoppingBasket, Truck, Shield, CreditCard } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:linear-gradient(0deg,transparent,white,transparent)]"></div>
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <div className="flex items-center justify-center mb-8">
            <ShoppingBasket className="w-16 h-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-yellow-300">BuyBasket</span>
          </h1>
          <p className="text-xl text-gray-100">
            Your one-stop destination for quality products. Shop with confidence and style.
          </p>
          <div className="mt-10">
            <Link
              href="/products"
              className="inline-block bg-yellow-300 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 rounded-xl shadow-md p-8 hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="bg-blue-900 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
            <Truck className="w-8 h-8 text-yellow-300" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Express Delivery</h3>
          <p className="text-gray-300">Get your products delivered quickly and securely to your doorstep.</p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-md p-8 hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="bg-purple-900 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
            <Shield className="w-8 h-8 text-yellow-300" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Secure Shopping</h3>
          <p className="text-gray-300">Your security is our top priority with safe and encrypted transactions.</p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-md p-8 hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="bg-blue-900 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
            <CreditCard className="w-8 h-8 text-yellow-300" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Easy Payments</h3>
          <p className="text-gray-300">Multiple payment options for a hassle-free shopping experience.</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Shopping?</h2>
        <p className="text-lg text-gray-100 mb-8">
          Join thousands of satisfied customers who trust BuyBasket for their shopping needs.
        </p>
        <Link
          href="/products"
          className="inline-block bg-yellow-300 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-opacity"
        >
          Explore Products
        </Link>
      </div>
    </div>
  );
}
