import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="mt-8">
      {/* Navbar */}
      <nav className="w-11/12 lg:container mx-auto">
        <Navbar />
      </nav>

      {/* Main Content */}
      <main className="py-24 min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
