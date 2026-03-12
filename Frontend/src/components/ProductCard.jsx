import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group cursor-pointer">

        {/* Product Image */}
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">

          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
            {product.name}
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            {product.category}
          </p>

          <div className="flex items-center justify-between mt-4">

            <span className="text-xl font-bold text-blue-600">
              ${product.price}
            </span>

            {/* Add to Cart Button */}
            <button
              onClick={(e) => {
                e.preventDefault(); // stop navigation
                addToCart(product);
              }}
              className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <ShoppingCart size={16} />
              Add
            </button>

          </div>

        </div>
      </div>
    </Link>
  );
};

export default ProductCard;