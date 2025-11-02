import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/cars" },
    { name: "Add Car", path: "/add-car" },
    { name: "My Bookings", path: "/my-bookings" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full text-white z-50 bg-transparent backdrop-blur-sm"
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-16 py-5">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold tracking-wide logo-font">
          Rent<span className="text-primary"> a </span>Car
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                `cursor-pointer transition ${
                  isActive ? "text-primary font-semibold" : "hover:text-primary"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>

        {/* Desktop Contact Button */}
        <Link
          to="/login"
          whileHover={{ scale: 1.05 }}
          className="hidden md:flex items-center gap-2 px-5 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-100"
        >
          Login <span className="text-xl">→</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden cursor-pointer text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/80 backdrop-blur-sm py-6"
          >
            <ul className="flex flex-col items-center gap-4 text-lg font-medium">
              {navItems.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-white hover:text-primary"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <button className="mt-3 px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-100">
                Contact
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
