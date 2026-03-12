import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { Search } from "lucide-react";

const productsData = [
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

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  let filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  if (sort === "low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-14 text-center text-white shadow-lg">
        <h1 className="text-4xl font-bold mb-3">Explore Our Products</h1>
        <p className="opacity-90">
          Discover amazing products at unbeatable prices
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Sidebar Filters */}
          <div className="space-y-8 bg-white p-6 rounded-2xl shadow-md h-fit sticky top-24">

            {/* Search */}
            <div>
              <h3 className="font-semibold mb-3 text-gray-700">
                Search Product
              </h3>

              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
                <Search size={18} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 w-full bg-transparent outline-none"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

            </div>

            {/* Category Filter */}
            <div>
              <h3 className="font-semibold mb-3 text-gray-700">
                Category
              </h3>

              <select
                className="border rounded-lg px-3 py-2 w-full bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Accessories">Accessories</option>
              </select>

            </div>

            {/* Sort */}
            <div>
              <h3 className="font-semibold mb-3 text-gray-700">
                Sort by Price
              </h3>

              <select
                className="border rounded-lg px-3 py-2 w-full bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="">Default</option>
                <option value="low">Low → High</option>
                <option value="high">High → Low</option>
              </select>

            </div>

          </div>

          {/* Products Grid */}
          <div className="md:col-span-3">

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <h2 className="text-2xl font-semibold text-gray-700">
                  No Products Found
                </h2>
                <p className="text-gray-500 mt-2">
                  Try changing your filters or search keyword
                </p>
              </div>
            ) : (

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}

              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Products;