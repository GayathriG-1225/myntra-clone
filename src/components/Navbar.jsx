import React from "react";
import { Link } from "react-router-dom";

function Navbar({
  cartCount,
  wishlistCount
}) {

  return (
    <nav className="navbar">

      <div className="logo">
        MYNTRA
      </div>

      <div className="nav-links">

        <Link to="/">
          HOME
        </Link>

        <Link to="/men">
          MEN
        </Link>

        <Link to="/women">
          WOMEN
        </Link>

        <Link to="/kids">
          KIDS
        </Link>

        <Link to="/beauty">
          BEAUTY
        </Link>

      </div>

      <div className="search-box">

        <span>🔍</span>

        <input
          type="text"
          placeholder="Search for products, brands and more"
        />

      </div>

      <div className="nav-icons">

        <div className="nav-item">
          <span>👤</span>
          <p>Profile</p>
        </div>

        <Link
          to="/wishlist"
          className="nav-item wishlist-item"
        >

          <span>❤️</span>

          {wishlistCount > 0 && (
            <span className="wishlist-count">
              {wishlistCount}
            </span>
          )}

          <p>Wishlist</p>

        </Link>

        <Link
          to="/cart"
          className="nav-item bag-item"
        >

          <span>🛍️</span>

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}

          <p>Bag</p>

        </Link>

      </div>

    </nav>
  );
}

export default Navbar;