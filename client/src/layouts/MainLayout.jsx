import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
  return (
    <div className="mt-8">
      {/* Navbar */}
      <nav className="container mx-auto">
        <Navbar />
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer></footer>
    </div>
  );
};

export default MainLayout;
