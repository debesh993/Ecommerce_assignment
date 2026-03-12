import { useCart } from "../context/CartContext";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-xl text-gray-500">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-bold mb-10">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-10">

        {/* Cart Items */}
        <div className="md:col-span-2 space-y-6">

          {cart.map((item) => (

            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow-md rounded-xl p-5"
            >

              {/* Product */}
              <div className="flex items-center gap-5">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div>
                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    ${item.price}
                  </p>

                  <p className="text-blue-600 font-semibold mt-1">
                    Subtotal: ${item.price * item.quantity}
                  </p>
                </div>

              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3">

                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>

                <span className="font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>

              </div>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 />
              </button>

            </div>

          ))}

        </div>

        {/* Order Summary */}
        <div className="bg-white shadow-md rounded-xl p-6 h-fit">

          <h2 className="text-xl font-semibold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-4 text-gray-600">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between mb-4 text-gray-600">
            <span>Total Price</span>
            <span>${total}</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Checkout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Cart;