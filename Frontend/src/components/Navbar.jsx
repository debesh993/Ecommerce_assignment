import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  // total items count
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-800">
            ShopSphere
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg w-[400px]">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none ml-2 w-full"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/products" className="hover:text-blue-600">
              Products
            </Link>

            <Link to="/reviews" className="hover:text-blue-600">
              Reviews
            </Link>

            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Profile */}
            <Link to="/login">
              <User size={22} />
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">

          <div className="flex flex-col p-4 gap-4">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/products" onClick={() => setOpen(false)}>
              Products
            </Link>

            <Link to="/reviews" onClick={() => setOpen(false)}>
              Reviews
            </Link>

            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <Link to="/cart" onClick={() => setOpen(false)}>
              Cart
            </Link>

            <Link to="/login" onClick={() => setOpen(false)}>
              Profile
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;