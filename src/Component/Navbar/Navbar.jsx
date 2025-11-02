import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = ["Home", "Cars", "Add Car", "My Bookings", "Login"];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="absolute top-0 left-0 w-full text-white z-20 bg-transparent"
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-16 py-6">
        {/* Logo */}
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-2xl font-bold tracking-wide logo-font"
        >
          Rent<span className="text-primary"> a </span>Car
        </motion.h2>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer hover:text-primary transition"
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Contact Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="hidden md:flex items-center gap-2 px-5 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-100"
        >
          Contact <span className="text-xl">→</span>
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
