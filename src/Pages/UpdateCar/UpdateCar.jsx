import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import { motion } from "framer-motion";

const UpdateCar = () => {
  const car = useLoaderData(); // Loaded car data

  console.log(car);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Car Data:");
    // TODO: API call to update the car
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-12">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhciUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
        alt="Update Car Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-3xl text-white rounded-2xl shadow-lg p-8 md:p-10 backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Update <span className="text-primary">Car</span>
        </h2>

        <form
          //   onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div>
            <label className="block font-medium mb-2">Car Name</label>
            <input
              type="text"
              name="name"
              defaultValue={car.name}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary  "
              placeholder="Toyota Corolla"
              required
            />
          </div>

          {/* Brand */}
          <div>
            <label className="block font-medium mb-2">Brand</label>
            <input
              type="text"
              name="brand"
              defaultValue={car.brand}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary  "
              placeholder="Toyota"
              required
            />
          </div>

          {/* Image URL */}
          <div className="md:col-span-2">
            <label className="block font-medium mb-2">Image URL</label>
            <input
              type="url"
              name="image"
              defaultValue={car.image}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary  "
              placeholder="https://i.ibb.co/example.jpg"
              required
            />
          </div>

          {/* Rent per day */}
          <div>
            <label className="block font-medium mb-2">Rent per Day ($)</label>
            <input
              type="number"
              name="rent_per_day"
              defaultValue={car.rent_per_day}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary  "
              placeholder="50"
              required
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block font-medium mb-2">Quantity</label>
            <input
              type="number"
              name="quantity"
              defaultValue={car.quantity}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary  "
              placeholder="3"
              required
            />
          </div>

          {/* Fuel Type */}
          <div>
            <label className="block font-medium mb-2">Fuel Type</label>
            <input
              type="text"
              name="fuel_type"
              defaultValue={car.fuel_type}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary  "
              placeholder="Petrol / Diesel / Electric"
              required
            />
          </div>

          {/* Transmission */}
          <div>
            <label className="block font-medium mb-2">Transmission</label>
            <input
              type="text"
              name="transmission"
              defaultValue={car.transmission}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary  "
              placeholder="Automatic / Manual"
              required
            />
          </div>

          {/* Seats */}
          <div>
            <label className="block font-medium mb-2">Seats</label>
            <input
              type="number"
              name="seats"
              defaultValue={car.seats}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary  "
              placeholder="5"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block font-medium mb-2">Rating</label>
            <input
              type="number"
              step="0.1"
              max="5"
              name="rating"
              defaultValue={car.rating}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary  "
              placeholder="4.5"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium mb-2">Location</label>
            <input
              type="text"
              name="location"
              defaultValue={car.location}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary  "
              placeholder="Dhaka"
              required
            />
          </div>

          {/* Available */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="available"
              defaultValue={car.available}
              className="w-5 h-5 accent-primary"
            />
            <label className="font-medium">Available for Rent</label>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block font-medium mb-2">Description</label>
            <textarea
              name="description"
              defaultValue={car.description}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary  "
              rows="4"
              placeholder="Comfortable sedan with AC and auto transmission..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-3 bg-primary cursor-pointer text-white font-semibold rounded-full shadow-lg hover:bg-primary/80 transition"
            >
              Update Car
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default UpdateCar;
