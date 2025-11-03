import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaCarSide, FaUsers } from "react-icons/fa";
import { Link } from "react-router";

const CarCard = ({ car }) => {
  const { image, name, rating, seats, _id } = car;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 150 }}
      className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all w-full max-w-sm mx-auto"
    >
      {/* Car Image */}
      <div className="relative">
        <img src={image} alt={name} className="w-full h-56 object-cover" />
        <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            {rating}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <FaCarSide className="text-primary" /> {name}
        </h2>

        <p className="flex items-center gap-2 text-gray-600">
          <FaUsers className="text-secondary" /> Seats: {seats}
        </p>
        <Link
          to={`/cars/${_id}`}
          className="mt-3 w-full bg-primary text-white py-2 rounded-full font-semibold hover:bg-primary/90 transition cursor-pointer flex justify-center"
        >
          View More →
        </Link>
      </div>
    </motion.div>
  );
};

export default CarCard;
