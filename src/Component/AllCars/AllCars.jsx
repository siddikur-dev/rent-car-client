import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import CarCard from "../CarCard/CarCard";

const AllCars = () => {
  const cars = useLoaderData(); // initial data
  const [searchText, setSearchText] = useState("");
  const [filteredCars, setFilteredCars] = useState(cars);

  // --- search effect ---
  useEffect(() => {
    if (!searchText.trim()) {
      setFilteredCars(cars); // empty search → show all
      return;
    }

    // fetch from backend
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/cars/search?search=${searchText}`
        );
        const data = await res.json();
        setFilteredCars(data);
      } catch (err) {
        console.error("Search failed:", err);
      }
    };

    fetchData();
  }, [searchText, cars]);

  return (
    <div className="w-full">
      {/* --- Header Section --- */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="https://plus.unsplash.com/premium_photo-1736637312833-d62623ac4df4?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=1200"
          alt="All Cars Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Explore All <span className="text-primary">Cars</span>
          </h2>
          <p className="text-gray-200 max-w-xl mx-auto">
            Find the perfect car for your next adventure.
          </p>

          {/* --- Search Bar --- */}
          <div className="w-full sm:w-2/3 md:w-1/2 mt-4">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search car by name..."
              className="w-full px-5 py-3 rounded-full bg-white/90 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* --- Car Listing --- */}
      <div className="container mx-auto my-16 px-6">
        {filteredCars.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No cars found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
            {filteredCars.map((car) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCars;
