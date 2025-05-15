import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BuyBasket - Your One-Stop Shopping Destination',
  description: 'Discover amazing products at BuyBasket, your modern e-commerce destination for quality shopping.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-950">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-gray-900 to-gray-950`}>
        <Toaster position="top-right" />
        <CartProvider>
          <WishlistProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
              </main>
              <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <p>© 2024 BuyBasket. All rights reserved.</p>
                  </div>
                </div>
              </footer>
            </div>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
