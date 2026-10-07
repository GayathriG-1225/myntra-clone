import React from "react";
import ProductCard from "../components/ProductCard";

function Beauty({ addToCart, addToWishlist }) {

    const beautyProducts = [
        {
            id: 401,
            name: "Matte Lipstick",
            brand: "Maybelline",
            price: 499,
            oldPrice: 699,
            discount: 29,
            rating: 4.5,
            image:
                "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=500&q=80",
        },

        {
            id: 402,
            name: "Hydrating Face Cream",
            brand: "Lakme",
            price: 599,
            oldPrice: 899,
            discount: 33,
            rating: 4.4,
            image:
                "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=500&q=80",
        },

        {
            id: 403,
            name: "Face Serum",
            brand: "Minimalist",
            price: 699,
            oldPrice: 999,
            discount: 30,
            rating: 4.6,
            image:
                "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80",
        },

        {
            id: 404,
            name: "Perfume for Women",
            brand: "Bella Vita",
            price: 899,
            oldPrice: 1499,
            discount: 40,
            rating: 4.3,
            image:
                "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80",
        },

        {
            id: 405,
            name: "Makeup Brush Set",
            brand: "Swiss Beauty",
            price: 399,
            oldPrice: 699,
            discount: 43,
            rating: 4.2,
            image:
                "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80",
        },

        {
            id: 406,
            name: "Hair Care Kit",
            brand: "L'Oreal",
            price: 799,
            oldPrice: 1199,
            discount: 33,
            rating: 4.5,
            image:
                "https://tse2.mm.bing.net/th/id/OIP.UVq24crD-bg8SzFz8Jl0VAHaHa?r=0&pid=Api&h=220&P=0",
        },
    ];

    return (
        <div className="category-page">
            <h1>BEAUTY</h1>
            <p>
                Discover beauty products for your everyday style.
            </p>

            <div className="category-options">
                <div>MAKEUP</div>
                <div>SKINCARE</div>
                <div>HAIRCARE</div>
                <div>FRAGRANCES</div>
                <div>BEAUTY ACCESSORIES</div>
            </div>

            <section className="category-products">
                <h2>BEAUTY COLLECTION</h2>

                <div className="product-container">
                    {beautyProducts.map((product) => (
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

export default Beauty;