import React, { useState } from 'react';
import CartItem from '../components/CartItem';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Checkout.css';

const Checkout = ({ cartItems, updateQuantity, removeItem }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <Navbar />
      <div className="checkout-container">
        <div className="cart-items">
          <h2>Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))
          )}
        </div>
        <div className="checkout-form">
          <h2>Checkout</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Shipping Address"
              required
            ></textarea>
            <button type="submit" className="checkout-btn">Place Order</button>
          </form>
        </div>
      </div>
      <div className="total">
        <h3>Total: ${total}</h3>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
