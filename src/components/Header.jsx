import React from "react";

const Header = ({ setPage }) => (
  <header className="header">
    <h1>🛒 My Shopping Site</h1>
    <nav>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About</button>
      <button onClick={() => setPage("products")}>Products</button>
      <button onClick={() => setPage("cart")}>Cart</button>
      <button onClick={() => setPage("contact")}>Contact</button>
    </nav>
  </header>
);

export default Header;
