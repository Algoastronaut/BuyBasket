import { ShoppingBag, Truck, Shield, HeadphonesIcon, ShoppingBasket } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-8">
          <ShoppingBasket className="w-16 h-16 text-yellow-300" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About <span className="text-yellow-300">BuyBasket</span></h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Your premier destination for modern online shopping. We are committed to providing
          an exceptional shopping experience with a carefully curated selection of products.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 md:p-12 mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-100">
            At BuyBasket, we believe shopping should be easy, enjoyable, and accessible to everyone. 
            Our mission is to create a seamless online shopping experience that connects quality 
            products with discerning customers. We strive to bring you the best products at 
            competitive prices while ensuring a smooth and secure shopping journey.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <ShoppingBag className="w-6 h-6 text-yellow-300" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Curated Selection</h3>
          <p className="text-gray-300">Carefully selected products ensuring quality and value for our customers.</p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Truck className="w-6 h-6 text-yellow-300" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Fast Shipping</h3>
          <p className="text-gray-300">Quick and reliable delivery through our efficient logistics network.</p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="bg-purple-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-yellow-300" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Secure Shopping</h3>
          <p className="text-gray-300">Your security is our priority with safe and encrypted transactions.</p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="bg-red-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <HeadphonesIcon className="w-6 h-6 text-yellow-300" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
          <p className="text-gray-300">Our dedicated team is always here to help with any questions.</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-300 mb-8">
            Have questions or feedback? We'd love to hear from you! Our customer support
            team is available 24/7 to assist you with any inquiries.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <span className="font-semibold">Email:</span>
              <a href="mailto:support@buybasket.com" className="text-yellow-300 hover:text-yellow-400">
                support@buybasket.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <span className="font-semibold">Phone:</span>
              <a href="tel:(555)123-4567" className="text-yellow-300 hover:text-yellow-400">
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 