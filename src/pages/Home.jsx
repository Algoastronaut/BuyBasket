import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <ProductList products={[]} />
      <Footer />
    </div>
  );
};

export default Home;
