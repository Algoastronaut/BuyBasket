import React from 'react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import './Products.css';

const Products = () => {
  const products = [
    { id: 1, title: 'Product 1', description: 'Description 1', price: 29.99, image: 'image1.jpg' },
    { id: 2, title: 'Product 2', description: 'Description 2', price: 49.99, image: 'image2.jpg' },
    // Add more products
  ];

  return (
    <div className="products">
      <Navbar />
      <h2>Our Products</h2>
      <ProductList products={products} />
      <Footer />
    </div>
  );
};

export default Products;
