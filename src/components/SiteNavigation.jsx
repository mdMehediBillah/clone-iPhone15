import { NavLink } from "react-router-dom";

const SiteNavigation = () => {
  return (
    <header className=" bg-zinc ">
      <nav className="flex items-center justify-between container mx-auto p-4">
        <NavLink to="/">
          <span>Billah</span>
        </NavLink>
        <div className="flex gap-4">
          <NavLink
            to="/gsap"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-500"
            }
          >
            <span>GSAP Lesson</span>
          </NavLink>
          <NavLink
            to="/apple"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-500"
            }
          >
            <span>Apple</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default SiteNavigation;
