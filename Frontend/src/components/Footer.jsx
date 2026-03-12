import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            ShopSphere
          </h2>

          <p className="mt-4 text-sm text-gray-400">
            A modern ecommerce platform built with React and Tailwind.
            Discover amazing products with great deals.
          </p>

          <div className="flex gap-4 mt-5">

            <Facebook className="cursor-pointer hover:text-white" />

            <Instagram className="cursor-pointer hover:text-white" />

            <Twitter className="cursor-pointer hover:text-white" />

            <Github className="cursor-pointer hover:text-white" />

          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Shop
          </h3>

          <div className="space-y-2">

            <Link to="/products" className="block hover:text-white">
              Products
            </Link>

            <Link to="/cart" className="block hover:text-white">
              Cart
            </Link>

            <Link to="/reviews" className="block hover:text-white">
              Reviews
            </Link>

          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Company
          </h3>

          <div className="space-y-2">

            <a href="#" className="block hover:text-white">
              About Us
            </a>

            <a href="#" className="block hover:text-white">
              Careers
            </a>

            <a href="#" className="block hover:text-white">
              Blog
            </a>

          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Support
          </h3>

          <div className="space-y-2">

            <a href="#" className="block hover:text-white">
              Help Center
            </a>

            <a href="#" className="block hover:text-white">
              Contact Us
            </a>

            <a href="#" className="block hover:text-white">
              FAQs
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">

        © {new Date().getFullYear()} ShopSphere. All rights reserved.

      </div>

    </footer>
  );
};

export default Footer;