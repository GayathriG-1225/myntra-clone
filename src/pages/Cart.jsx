import React, { useState } from "react";

function Cart({ cart, removeFromCart }) {

  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cart.reduce(
    (total, product) => total + product.price,
    0
  );

  function handlePlaceOrder() {
    setOrderPlaced(true);
  }

  return (
    <div className="cart-page">

      <h1>MY BAG</h1>

      {orderPlaced ? (

        <div className="order-success">

          <div className="success-icon">
            ✓
          </div>

          <h2>Order Placed Successfully!</h2>

          <p>
            Thank you for shopping with Myntra.
          </p>

          <p>
            Your order has been placed successfully.
          </p>

        </div>

      ) : cart.length === 0 ? (

        <div className="empty-cart">

          <h2>Your bag is empty</h2>

          <p>Add some products to your bag.</p>

        </div>

      ) : (

        <div className="cart-content">

          <div className="cart-items">

            {cart.map((product, index) => (

              <div className="cart-item" key={index}>

                <img
                  src={product.image}
                  alt={product.name}
                />

                <div className="cart-item-details">

                  <h3>{product.name}</h3>

                  <p>{product.brand}</p>

                  <h4>₹{product.price}</h4>

                  <button
                    onClick={() => removeFromCart(index)}
                  >
                    REMOVE
                  </button>

                </div>

              </div>

            ))}

          </div>

          <div className="cart-summary">

            <h2>PRICE DETAILS</h2>

            <div className="summary-row">

              <span>Total Items</span>

              <span>{cart.length}</span>

            </div>

            <div className="summary-row">

              <span>Total Price</span>

              <span>₹{totalPrice}</span>

            </div>

            <hr />

            <div className="summary-total">

              <span>TOTAL</span>

              <span>₹{totalPrice}</span>

            </div>

            <button
              className="place-order"
              onClick={handlePlaceOrder}
            >
              PLACE ORDER
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;