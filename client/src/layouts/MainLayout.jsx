import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <nav></nav>

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
