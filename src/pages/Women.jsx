import React from "react";
import ProductCard from "../components/ProductCard";

function Women({ addToCart, addToWishlist }) {

  const womenProducts = [
    {
      id: 201,
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
      id: 202,
      name: "Women's Casual Top",
      brand: "Roadster",
      price: 799,
      oldPrice: 1299,
      discount: 38,
      rating: 4.3,
      image:
        "https://i5.walmartimages.com/seo/Fantaslook-Blouses-for-Women-Dressy-V-Neck-Ruffle-Sleeve-Summer-Tops-Casual-Flowy-Shirts_7806f9c7-a6fb-4fca-8e4e-6810c6f0bf1e.9260b0389cbb54a85f8f696ae13d3fdc.jpeg",
    },

    {
      id: 203,
      name: "Women's Denim Jeans",
      brand: "Levis",
      price: 1499,
      oldPrice: 2499,
      discount: 40,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=80",
    },

    {
      id: 204,
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
      id: 205,
      name: "Women's Casual Shoes",
      brand: "Puma",
      price: 1699,
      oldPrice: 2999,
      discount: 43,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80",
    },

    {
      id: 206,
      name: "Elegant Party Dress",
      brand: "DressBerry",
      price: 1599,
      oldPrice: 2699,
      discount: 41,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="category-page">

      <h1>WOMEN'S FASHION</h1>

      <p>
        Discover the latest trends and styles for women.
      </p>

      <div className="category-options">

        <div>DRESSES</div>
        <div>TOPS</div>
        <div>JEANS</div>
        <div>HANDBAGS</div>
        <div>FOOTWEAR</div>

      </div>

      <section className="category-products">
        <h2>WOMEN'S COLLECTION</h2>
        <div className="product-container">
          {womenProducts.map((product) => (
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

export default Women;