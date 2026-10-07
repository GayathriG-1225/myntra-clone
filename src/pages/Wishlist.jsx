import React from "react";

function Wishlist({ wishlist, removeFromWishlist, addToCart }) {

  return (
    <div className="wishlist-page">

      <h1>MY WISHLIST</h1>

      {wishlist.length === 0 ? (

        <div className="empty-wishlist">

          <div className="empty-heart">
            ❤️
          </div>

          <h2>Your wishlist is empty</h2>

          <p>
            Save your favourite products here.
          </p>

        </div>

      ) : (

        <div className="wishlist-container">

          {wishlist.map((product) => (

            <div
              className="wishlist-card"
              key={product.id}
            >

              <div className="wishlist-image-container">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <button
                  className="remove-wishlist"
                  onClick={() =>
                    removeFromWishlist(product.id)
                  }
                >
                  ❤️
                </button>

              </div>

              <div className="wishlist-details">

                <h3>{product.name}</h3>

                <p>
                  {product.brand}
                </p>

                <div className="wishlist-price">

                  <span>
                    ₹{product.price}
                  </span>

                  <del>
                    ₹{product.oldPrice}
                  </del>

                </div>

                <button
                  className="wishlist-bag"
                  onClick={() => addToCart(product)}
                >
                  ADD TO BAG
                </button>

                <button
                  className="wishlist-remove-button"
                  onClick={() =>
                    removeFromWishlist(product.id)
                  }
                >
                  REMOVE
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Wishlist;