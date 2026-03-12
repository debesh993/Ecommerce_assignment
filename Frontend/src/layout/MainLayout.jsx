import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

    </div>
  );
};

export default MainLayout;