import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import { useCart } from "../Context/CartContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 shadow-2xl border-b border-white/20 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-extrabold text-white hover:scale-110 transform transition-transform duration-300"
          >
            ShopSphere
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-white/30 backdrop-blur-sm px-3 py-2 rounded-full w-[400px] hover:bg-white/50 transition-all shadow-sm">
            <Search size={18} className="text-white" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none ml-2 w-full placeholder-white text-white"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-white">
            <Link className="hover:text-yellow-300 transition-colors" to="/">Home</Link>
            <Link className="hover:text-yellow-300 transition-colors" to="/products">Products</Link>
            <Link className="hover:text-yellow-300 transition-colors" to="/reviews">Reviews</Link>
            <Link className="hover:text-yellow-300 transition-colors" to="/contact">Contact</Link>

            {/* Cart */}
            <Link to="/cart" className="relative hover:text-yellow-300 transition-colors">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Profile */}
            <Link to="/login" className="hover:text-yellow-300 transition-colors">
              <User size={24} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/20 transition-all"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {/* Mobile Sidebar */}
      {/* Mobile Sidebar */}
   {/* Mobile Sidebar */}
<div
  className={`md:hidden fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-purple-600 via-pink-500 to-orange-400 shadow-2xl transform transition-transform duration-300 ${
    open ? "translate-x-0" : "-translate-x-full"
  } z-50`}
>
  <div className="flex justify-between items-center p-6 border-b border-white/20">
    <span className="text-2xl font-bold text-white">Menu</span>
    <button onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-white/20 transition-all">
      <X size={24} className="text-white" />
    </button>
  </div>

  {/* Mobile Menu Items */}
  <div className="flex flex-col p-6 gap-4 font-medium">
    <Link
      to="/"
      onClick={() => setOpen(false)}
      className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 hover:shadow-md transition-all"
    >
      Home
    </Link>
    <Link
      to="/products"
      onClick={() => setOpen(false)}
      className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 hover:shadow-md transition-all"
    >
      Products
    </Link>
    <Link
      to="/reviews"
      onClick={() => setOpen(false)}
      className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 hover:shadow-md transition-all"
    >
      Reviews
    </Link>
    <Link
      to="/contact"
      onClick={() => setOpen(false)}
      className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 hover:shadow-md transition-all"
    >
      Contact
    </Link>
    <Link
      to="/cart"
      onClick={() => setOpen(false)}
      className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 hover:shadow-md transition-all"
    >
      Cart ({cartCount})
    </Link>
    <Link
      to="/login"
      onClick={() => setOpen(false)}
      className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 hover:shadow-md transition-all"
    >
      Profile
    </Link>
  </div>
</div>

      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;