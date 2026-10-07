import React from "react";
import ProductCard from "../components/ProductCard";

function Kids({ addToCart, addToWishlist }) {

  const kidsProducts = [
    {
      id: 301,
      name: "Boys Casual T-Shirt",
      brand: "H&M Kids",
      price: 599,
      oldPrice: 999,
      discount: 40,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=500&q=80",
    },

    {
      id: 302,
      name: "Girls Summer Dress",
      brand: "Max Kids",
      price: 899,
      oldPrice: 1499,
      discount: 40,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=500&q=80",
    },

    {
      id: 303,
      name: "Kids Denim Jacket",
      brand: "Levis Kids",
      price: 1199,
      oldPrice: 1999,
      discount: 40,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=500&q=80",
    },

    {
      id: 304,
      name: "Kids Casual Shoes",
      brand: "Puma Kids",
      price: 999,
      oldPrice: 1599,
      discount: 38,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=500&q=80",
    },

    {
      id: 305,
      name: "Kids Printed Outfit",
      brand: "Allen Solly Kids",
      price: 799,
      oldPrice: 1299,
      discount: 38,
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=500&q=80",
    },

    {
      id: 306,
      name: "Kids Fashion Hoodie",
      brand: "U.S. Polo Kids",
      price: 1099,
      oldPrice: 1799,
      discount: 39,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="category-page">

      <h1>KIDS' FASHION</h1>

      <p>
        Explore trendy and comfortable styles for kids.
      </p>

      <div className="category-options">

        <div>BOYS</div>
        <div>GIRLS</div>
        <div>CLOTHING</div>
        <div>FOOTWEAR</div>
        <div>ACCESSORIES</div>

      </div>

      <section className="category-products">

        <h2>KIDS' COLLECTION</h2>

        <div className="product-container">

          {kidsProducts.map((product) => (

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

export default Kids;