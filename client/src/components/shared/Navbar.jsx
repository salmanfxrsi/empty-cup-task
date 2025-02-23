import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navigationLinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="speakers">Speakers</NavLink>
      <NavLink to="schedule">Schedule</NavLink>
      <NavLink to="sponsors">Sponsors</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contact">Contact</NavLink>
    </>
  );

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
      {/* Logo Section */}
      <div className="flex items-center gap-2.5">
        <img
          className="w-8 h-8"
          src="https://i.ibb.co.com/kV2MDDKC/small-logo.png"
          alt="EmptyCup Logo"
        />
        <h1 className="text-2xl font-bold text-[#2e2e2e]">TechVerse</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6 text-[#2e2e2e] flex-wrap justify-center">
        {navigationLinks}
      </nav>

      {/* Powered By */}
      <div className="flex items-center gap-8">
        <div className="bg-amber-800 text-white py-2 px-6 rounded-3xl">
          Powered By EmptyCup
        </div>
      </div>
    </div>
  );
};

export default Navbar;
