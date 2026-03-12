import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-indigo-50">

      {/* Decorative Blur Background */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-14">

        {/* Left Content */}
        <div className="relative z-10">

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Discover <span className="text-blue-600">Amazing Products</span>
            <br />
            at the <span className="text-indigo-600">Best Prices</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-lg">
            Shop the latest fashion, electronics, and accessories with
            unbeatable deals, premium quality, and fast delivery.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">

            <Link
              to="/products"
              className="flex items-center gap-2 bg-blue-600 text-white px-7 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-xl transition duration-300"
            >
              Shop Now
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/products"
              className="px-7 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              Explore
            </Link>

          </div>

          {/* Small Trust Text */}
          <p className="mt-6 text-sm text-gray-500">
            ⭐ Trusted by 10,000+ happy customers
          </p>

        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">

          <div className="absolute w-[420px] h-[420px] bg-blue-200 opacity-30 rounded-full blur-3xl"></div>

          <img
            src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=900"
            alt="shopping"
            className="relative rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;