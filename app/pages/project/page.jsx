"use client";
import { useState } from "react";

export default function page() {
  const categories = ["ALL", "APP", "PRODUCT", "BRANDING", "BOOKS"];
  const items = [
    {
      img: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      category: "APP",
    },
    {
      img: "https://images.unsplash.com/photo-1560674457-12073ed6fae6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbiUyMHdpdGglMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
      category: "PRODUCT",
    },
    {
      img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
      category: "BRANDING",
    },
    {
      img: "https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg",
      category: "BOOKS",
    },
    {
      img: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fHww",
      category: "PRODUCT",
    },
    {
      img: "https://www.adobe.com/acrobat/hub/media_179a6d21d8434721427c57f5ebbedcd094dc11bb1.jpg?width=750&format=jpg&optimize=medium",
      category: "APP",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // Filter items based on category
  const filteredItems =
    selectedCategory === "ALL"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <section className="bg-blue-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-4 border-b-4 border-blue-400 inline-block">
          Portfolio
        </h2>
        <p className="text-gray-600 mb-8">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate.
        </p>

        {/* Category Menu */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-semibold cursor-pointer ${
                selectedCategory === cat
                  ? "text-blue-600 underline"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={item.img}
                alt="Portfolio item"
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
