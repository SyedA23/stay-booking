import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";

export default function Header() {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDark(isDark);
  };

  // Close menu when clicking outside (optional improvement)
  useEffect(() => {
    const handleClickOutside = () => setMenu(false);
    if (menu) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [menu]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b">
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-semibold dark:text-white">
          StayEase
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-medium dark:text-gray-200">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-black dark:hover:text-white transition ${
                isActive ? "text-black dark:text-white font-bold" : ""
              }`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/stays"
            className={({ isActive }) =>
              `hover:text-black dark:hover:text-white transition ${
                isActive ? "text-black dark:text-white font-bold" : ""
              }`
            }
          >
            Villas
          </NavLink>
          <NavLink
            to="/experiences"
            className="hover:text-black dark:hover:text-white transition"
          >
            Experiences
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-black dark:hover:text-white transition"
          >
            About
          </NavLink>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Dark mode */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle dark mode"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile menu */}
          <button
            className="md:hidden p-2"
            onClick={(e) => {
              e.stopPropagation();
              setMenu(!menu);
            }}
            aria-label="Toggle menu"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menu && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-white dark:bg-gray-900"
          onClick={(e) => e.stopPropagation()}
        >
          <NavLink
            to="/"
            onClick={() => setMenu(false)}
            className={({ isActive }) =>
              `py-2 hover:text-black dark:hover:text-white ${
                isActive ? "text-black dark:text-white font-bold" : ""
              }`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/stays"
            onClick={() => setMenu(false)}
            className={({ isActive }) =>
              `py-2 hover:text-black dark:hover:text-white ${
                isActive ? "text-black dark:text-white font-bold" : ""
              }`
            }
          >
            Villas
          </NavLink>
          <NavLink
            to="/experiences"
            onClick={() => setMenu(false)}
            className="py-2 hover:text-black dark:hover:text-white"
          >
            Experiences
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenu(false)}
            className="py-2 hover:text-black dark:hover:text-white"
          >
            About
          </NavLink>
        </div>
      )}
    </header>
  );
}
