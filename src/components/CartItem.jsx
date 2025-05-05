import React from 'react';
import './CartItem.css';

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="item-info">
        <h4>{item.title}</h4>
        <p>${item.price}</p>
      </div>
      <div className="item-quantity">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
      </div>
      <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
