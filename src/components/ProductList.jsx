import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ addToCart, addToWishlist }) {

  const products = [
    {
      id: 1,
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
      id: 2,
      name: "Floral Summer Dress",
      brand: "Tokyo Talkies",
      price: 1199,
      oldPrice: 1999,
      discount: 40,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Running Shoes",
      brand: "Nike",
      price: 2499,
      oldPrice: 3999,
      discount: 38,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Classic Wrist Watch",
      brand: "Fossil",
      price: 1799,
      oldPrice: 2999,
      discount: 40,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      name: "Women's Handbag",
      brand: "Lavie",
      price: 999,
      oldPrice: 1799,
      discount: 44,
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      name: "Men's Casual Jacket",
      brand: "H&M",
      price: 1999,
      oldPrice: 3499,
      discount: 43,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <section className="products">

      <h2>TRENDING PRODUCTS</h2>

      <p className="products-subtitle">
        Discover our most popular fashion picks
      </p>

      <div className="product-container">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />

        ))}

      </div>

    </section>
  );
}

export default ProductList;