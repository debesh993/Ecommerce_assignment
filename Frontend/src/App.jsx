import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Signin";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import MainLayout from "./layout/MainLayout";
import CartProvider from "./context/CartContext";
import Products from "./pages/Products";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "product/:id",
        element: <ProductDetails />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "reviews",
        element: <Reviews />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  }
]);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;