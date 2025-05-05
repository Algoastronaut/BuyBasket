import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import { CartProvider } from "./context";

const App = () => {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "about": return <About />;
      case "products": return <Products />;
      case "cart": return <Cart />;
      case "contact": return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <CartProvider>
      <Header setPage={setPage} />
      <main className="main-content">{renderPage()}</main>
    </CartProvider>
  );
};

export default App;
