import { NavLink } from "react-router-dom";

const SiteNavigation = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto p-4">
      <NavLink to="/">
        <span>Billah</span>
      </NavLink>
      <NavLink
        to="/gsap"
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-gray-500"
        }
      >
        <span>GSAP</span>
      </NavLink>
    </nav>
  );
};

export default SiteNavigation;
