import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navigationLinks = (
    <>
      <NavLink>Home</NavLink>
      <NavLink>Speakers</NavLink>
      <NavLink>Schedule</NavLink>
      <NavLink>Speaker</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Contact</NavLink>
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
        <h1 className="text-2xl font-bold text-[#2e2e2e]">
          EmptyCup TechVerse
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6 text-[#2e2e2e]">{navigationLinks}</nav>

      {/* Auth Buttons */}
      <div className="flex items-center gap-8">
        <button className="text-[#2e2e2e]">Login</button>
        <button className="bg-[#995448] text-white py-2 px-6 rounded-3xl">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
