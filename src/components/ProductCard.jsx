import React from "react";

function ProductCard({ product, addToCart, addToWishlist }) {

  function handleAddToBag() {
    addToCart(product);
  }

  function handleWishlist() {
    addToWishlist(product);
  }

  return (
    <div className="product-card">

      <div className="product-image-container">

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <span className="discount">
          {product.discount}% OFF
        </span>

        <button
          className="wishlist-button"
          onClick={handleWishlist}
        >
          ❤️
        </button>

      </div>

      <div className="product-details">

        <h3>{product.name}</h3>

        <p className="product-brand">
          {product.brand}
        </p>

        <div className="price">

          <span className="current-price">
            ₹{product.price}
          </span>

          <span className="old-price">
            ₹{product.oldPrice}
          </span>

        </div>

        <p className="rating">
          ⭐ {product.rating}
        </p>

        <button
          className="add-bag"
          onClick={handleAddToBag}
        >
          ADD TO BAG
        </button>

      </div>

    </div>
  );
}

export default ProductCard;