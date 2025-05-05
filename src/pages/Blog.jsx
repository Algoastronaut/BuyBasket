import React, { useContext } from "react";
import { CartContext } from "../context";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </section>
  );
};

export default Cart;
