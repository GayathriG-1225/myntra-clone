import React from "react";

function Categories() {
    const categories = [
        {
            name: "Men",
            image:
                "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=500&q=80",
        },
        {
            name: "Women",
            image:
                "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=500&q=80",
        },
        {
            name: "Kids",
            image:
                "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=500&q=80",
        },
        {
            name: "Footwear",
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
        },
        {
            name: "Beauty",
            image:
                "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=500&q=80",
        },
        {
            name: "Accessories",
            image:
                "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=500&q=80",
        },
    ];

    return (
        <section className="categories">
            <h2>SHOP BY CATEGORY</h2>
            <p className="category-subtitle">
                Explore our latest fashion collections
            </p>

            <div className="category-container">
                {categories.map((category) => (
                    <div className="category-card" key={category.name}>
                        <img src={category.image} alt={category.name} />

                        <div className="category-overlay">
                            <h3>{category.name}</h3>
                            <button>EXPLORE</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;