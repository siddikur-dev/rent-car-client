import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddCar = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    image: "",
    rent_per_day: "",
    available: true,
    fuel_type: "",
    seats: "",
    transmission: "",
    location: "",
    rating: "",
    description: "",
    quantity: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(event.target);
    const newCar = Object.fromEntries(formData.entries());
    // Add a created time field
    newCar.createdAt = new Date().toISOString();
    // TODO: send newCar to your backend using fetch()
    fetch("http://localhost:3000/cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCar),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "New car has been added",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      });
  };

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden ">
        {/* Background Image */}
        <img
          src="https://ui8-carsova-html-1822364a1d14.herokuapp.com/img/model.jpg"
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
            Add Your Car to <span className="text-primary">Rent A Car</span>{" "}
            Fleet
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg max-w-2xl mx-auto text-gray-200 mb-8"
          >
            Have a car sitting idle? List it with us and start earning today! We
            offer secure rentals, verified customers, and complete management
            for your car’s safety and comfort.
          </motion.p>
        </div>
        {/*  */}
      </div>
      {/* --------- */}
      <div className="relative min-h-screen  flex items-center justify-center py-20 px-4 md:px-12">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhciUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
          alt="Add Car Background"
          className="absolute inset-0 w-full h-full object-cover "
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
            Add a New <span className="text-primary">Car</span>
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div>
              <label className="block font-medium mb-2">Car Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
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
                value={formData.brand}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Toyota"
                required
              />
            </div>

            {/* Image */}
            <div className="md:col-span-2">
              <label className="block font-medium mb-2">Image URL</label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
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
                value={formData.rent_per_day}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
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
                value={formData.quantity}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
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
                value={formData.fuel_type}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
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
                value={formData.transmission}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
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
                value={formData.seats}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
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
                value={formData.rating}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
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
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Dhaka"
                required
              />
            </div>

            {/* Available */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="available"
                checked={formData.available}
                onChange={handleChange}
                className="w-5 h-5 accent-primary"
              />
              <label className="font-medium">Available for Rent</label>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block font-medium mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
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
                Add Car
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default AddCar;
