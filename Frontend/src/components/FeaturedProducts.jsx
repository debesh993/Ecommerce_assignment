import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: 149,
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Fashion",
    price: 79,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    id: 4,
    name: "Backpack",
    category: "Accessories",
    price: 59,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    id: 5,
    name: "Sunglasses",
    category: "Fashion",
    price: 39,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
  },
  {
    id: 6,
    name: "Gaming Mouse",
    category: "Electronics",
    price: 49,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
  },

  {
    id: 7,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 69,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab"
  },
  {
    id: 8,
    name: "Leather Wallet",
    category: "Accessories",
    price: 29,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93"
  },
  {
    id: 9,
    name: "Denim Jacket",
    category: "Fashion",
    price: 120,
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800"
  },
  {
    id: 10,
    name: "Laptop Stand",
    category: "Electronics",
    price: 45,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
  },
  {
    id: 11,
    name: "Travel Duffel Bag",
    category: "Accessories",
    price: 85,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
  },
  {
    id: 12,
    name: "Casual Sneakers",
    category: "Fashion",
    price: 95,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb"
  },
  {
    id: 13,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 110,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    id: 14,
    name: "Stylish Cap",
    category: "Fashion",
    price: 25,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee"
  },
  {
    id: 15,
    name: "Portable Charger",
    category: "Electronics",
    price: 40,
    image: "https://images.unsplash.com/photo-1580894908361-967195033215"
  },
  {
    id: 16,
    name: "Classic Wrist Watch",
    category: "Accessories",
    price: 150,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314"
  },
  {
    id: 17,
    name: "Sports T-Shirt",
    category: "Fashion",
    price: 35,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 18,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 120,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df"
  },
  {
    id: 19,
    name: "Minimal Desk Lamp",
    category: "Electronics",
    price: 60,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c"
  },
  {
    id: 20,
    name: "Travel Sunglasses",
    category: "Fashion",
    price: 55,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
  },
  {
    id: 21,
    name: "Premium Laptop Backpack",
    category: "Accessories",
    price: 130,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 opacity-30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Section Header */}
        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto">
            Explore our most popular products loved by thousands of customers.
            Quality, style, and innovation — all in one place.
          </p>

        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {products.map((product) => (
            <div
              key={product.id}
              className="transform hover:-translate-y-2 transition duration-300"
            >
              <ProductCard product={product} />
            </div>
          ))}

        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-14">

          <Link
            to="/products"
            className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-xl transition duration-300"
          >
            View All Products
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
};

export default FeaturedProducts;