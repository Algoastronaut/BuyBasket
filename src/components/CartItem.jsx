import React, { useContext } from "react";
import { CartContext } from "../context";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <p>${item.price} × {item.quantity}</p>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
        />
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
