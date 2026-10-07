import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Beauty from "./pages/Beauty";

import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

function App() {

  // BAG
  const [cart, setCart] = useState([]);

  // WISHLIST
  const [wishlist, setWishlist] = useState([]);


  // ADD PRODUCT TO BAG
  function addToCart(product) {

    setCart((previousCart) => [
      ...previousCart,
      product
    ]);

  }


  // REMOVE PRODUCT FROM BAG
  function removeFromCart(index) {

    setCart((previousCart) =>
      previousCart.filter(
        (_, i) => i !== index
      )
    );

  }


  // ADD PRODUCT TO WISHLIST
  function addToWishlist(product) {

    setWishlist((previousWishlist) => {

      const alreadyExists = previousWishlist.some(
        (item) => item.id === product.id
      );

      if (alreadyExists) {
        return previousWishlist;
      }

      return [
        ...previousWishlist,
        product
      ];

    });

  }


  // REMOVE PRODUCT FROM WISHLIST
  function removeFromWishlist(productId) {

    setWishlist((previousWishlist) =>
      previousWishlist.filter(
        (product) => product.id !== productId
      )
    );

  }


  return (
    <BrowserRouter>
      {/* NAVBAR */}
      <Navbar
        cartCount={cart.length}
        wishlistCount={wishlist.length}
      />

      {/* PAGES */}
      <Routes>
        {/* HOME */}
        <Route path="/" element={
          <Home
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />
        }
        />


        {/* MEN */}
        <Route path="/men" element={
          <Men
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />
        }
        />


        {/* WOMEN */}
        <Route path="/women" element={
          <Women
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />
        }
        />


        {/* KIDS */}
        <Route path="/kids" element={
          <Kids
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />
        }
        />


        {/* BEAUTY */}
        <Route path="/beauty" element={
          <Beauty
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />
        }
        />


        {/* CART */}
        <Route path="/cart" element={
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
          />
        }
        />


        {/* WISHLIST */}
        <Route path="/wishlist" element={
          <Wishlist
            wishlist={wishlist}
            removeFromWishlist={removeFromWishlist}
            addToCart={addToCart}
          />
        }
        />
      </Routes>
      {/* FOOTER */}
      <Footer />

    </BrowserRouter>

  );
}

export default App;