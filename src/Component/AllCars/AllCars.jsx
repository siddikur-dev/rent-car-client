import React from "react";
import { useLoaderData } from "react-router";
import CarCard from "../CarCard/CarCard";

const AllCars = () => {
  const cars = useLoaderData();
  console.log(cars);
  return (
    <div className="w-full">
      {/* --- Hero Banner Section --- */}
      <div className="relative w-full h-[70vh] lg:h-screen overflow-hidden">
        <img
          src="https://plus.unsplash.com/premium_photo-1736637312833-d62623ac4df4?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=1200"
          alt="Explore All Cars Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>

        {/* --- Center Content --- */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white heading-font">
            Explore All <span className="text-primary"> Cars</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Choose from a wide range of modern, comfortable, and stylish cars
            for your next journey.
          </p>

          {/* --- Search Bar (Transparent & Blurred) --- */}
          <div className="w-full sm:w-2/3 md:w-1/2 mt-6">
            <input
              type="text"
              placeholder="Search car by name or brand..."
              className="w-full px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* --- Car Listing Section --- */}
      <div className="container mx-auto my-24 px-6">
        {/* --- Sort Dropdown --- */}
        <div className="flex justify-end mb-8">
          <select className="hidden md:flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full font-semibold hover:bg-gray-900">
            <option value="">Sort by →</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
            <option value="available">Available Now</option>
          </select>
        </div>

        {/* --- Car Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {cars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCars;
