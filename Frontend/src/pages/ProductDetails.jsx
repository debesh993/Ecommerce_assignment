import { useParams } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

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

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

      <div>
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl shadow-lg w-full"
        />
      </div>

      <div>

        <h1 className="text-3xl font-bold text-gray-800">
          {product.name}
        </h1>

        <p className="text-gray-500 mt-2">
          {product.category}
        </p>

        <p className="text-2xl font-bold text-blue-600 mt-4">
          ${product.price}
        </p>

        <p className="text-gray-600 mt-6">
          {product.description}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-8 flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>

      </div>

    </div>
  );
};

export default ProductDetails;