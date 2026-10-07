import React from "react";
import ProductCard from "../components/ProductCard";

function Men({ addToCart, addToWishlist }) {

  const menProducts = [
    {
      id: 101,
      name: "Slim Fit Casual Shirt",
      brand: "Roadster",
      price: 899,
      oldPrice: 1499,
      discount: 40,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=500&q=80",
    },

    {
      id: 102,
      name: "Classic Denim Jacket",
      brand: "H&M",
      price: 1999,
      oldPrice: 3499,
      discount: 43,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80",
    },

    {
      id: 103,
      name: "Men's Casual T-Shirt",
      brand: "Puma",
      price: 799,
      oldPrice: 1299,
      discount: 38,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },

    {
      id: 104,
      name: "Men's Running Shoes",
      brand: "Nike",
      price: 2499,
      oldPrice: 3999,
      discount: 38,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
    },

    {
      id: 105,
      name: "Formal White Shirt",
      brand: "Van Heusen",
      price: 1299,
      oldPrice: 1999,
      discount: 35,
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=500&q=80",
    },

    {
      id: 106,
      name: "Men's Casual Hoodie",
      brand: "Roadster",
      price: 1499,
      oldPrice: 2499,
      discount: 40,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="category-page">

      <h1>MEN'S FASHION</h1>

      <p>
        Explore the latest fashion styles for men.
      </p>

      <div className="category-options">

        <div>SHIRTS</div>
        <div>T-SHIRTS</div>
        <div>JEANS</div>
        <div>JACKETS</div>
        <div>SHOES</div>

      </div>


      {/* MEN PRODUCTS */}

      <section className="category-products">

        <h2>MEN'S COLLECTION</h2>

        <div className="product-container">

          {menProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />

          ))}

        </div>

      </section>

    </div>
  );
}

export default Men;