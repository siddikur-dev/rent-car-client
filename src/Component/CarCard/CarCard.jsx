import React from "react";
import { motion } from "framer-motion";

const AddCar = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base-200">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1618908581448-fd8a1e12b9a5?auto=format&fit=crop&w=1600&q=80"
        alt="Car"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 md:px-12 text-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Add Your Car to{" "}
          <span className="text-primary">Rent A Car</span> Fleet
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg max-w-2xl mx-auto text-gray-200 mb-8"
        >
          Have a car sitting idle? List it with us and start earning today!
          We offer secure rentals, verified customers, and complete management
          for your car’s safety and comfort.
        </motion.p>

        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 120 }}
          className="px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Book Now
        </motion.button>
      </div>
    </div>
  );
};

export default AddCar;
