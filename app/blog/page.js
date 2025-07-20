'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

export default function BlogPage() {
  const [blogPosts] = useState([
    {
      id: 1,
      title: "The Future of E-commerce: AI-Powered Shopping Experiences",
      excerpt: "Discover how artificial intelligence is revolutionizing the way we shop online, from personalized recommendations to virtual try-ons.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=60",
      tags: ["AI", "E-commerce", "Technology"]
    },
    {
      id: 2,
      title: "Sustainable Shopping: How to Make Eco-Friendly Choices",
      excerpt: "Learn about the importance of sustainable shopping and how to make environmentally conscious purchasing decisions.",
      author: "Michael Chen",
      date: "2024-01-10",
      readTime: "4 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=60",
      tags: ["Sustainability", "Eco-friendly", "Green Living"]
    },
    {
      id: 3,
      title: "Digital Payment Security: Protecting Your Online Transactions",
      excerpt: "Essential tips and best practices for keeping your financial information secure while shopping online.",
      author: "Emily Rodriguez",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=60",
      tags: ["Security", "Digital Payments", "Online Safety"]
    }
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="py-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-8">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            BuyBasket <span className="text-yellow-300">Blog</span>
          </h1>
          <p className="text-lg text-gray-100">
            Insights, tips, and stories about shopping, technology, and the future of e-commerce.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-colors duration-300">
            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="relative h-48 lg:h-auto lg:w-1/3 flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={post.id === 1}
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 p-6">
                {/* Category */}
                <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium mb-3">
                  {post.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-3 hover:text-yellow-300 transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-gray-400" />
                  <div className="flex gap-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="text-xs text-gray-400">#{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Read More Button */}
                <button className="inline-flex items-center gap-2 text-purple-400 hover:text-yellow-300 transition-colors">
                  <span className="font-medium">Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-12 py-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold text-white mb-3">
            Stay Updated with Our Latest Posts
          </h2>
          <p className="text-lg text-gray-100 mb-6">
            Get notified when we publish new articles about shopping, technology, and e-commerce trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:border-yellow-300 transition-colors"
            />
            <button className="px-6 py-2 bg-yellow-300 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 