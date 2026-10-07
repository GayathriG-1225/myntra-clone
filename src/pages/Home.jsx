import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import ProductList from "../components/ProductList";

function Home({ addToCart, addToWishlist }) {
  return (
    <>
      <Banner />

      <Categories />

      <ProductList
        addToCart={addToCart}
        addToWishlist={addToWishlist}
      />
    </>
  );
}

export default Home;