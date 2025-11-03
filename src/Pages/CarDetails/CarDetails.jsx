import React from "react";
import { useLoaderData } from "react-router";

const CarDetails = () => {
  const car = useLoaderData();

  return (
    <div className="container mx-auto px-4 my-24">
      <div className="bg-base-200 rounded-2xl shadow-lg overflow-hidden md:flex md:gap-6">
        {/* Car Image */}
        <div className="md:w-1/2">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover md:h-auto"
          />
        </div>

        {/* Car Info */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-2">
              {car.name}
            </h2>
            <p className="text-lg text-gray-600 mb-4">{car.brand}</p>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-yellow-500 font-semibold">
                ★ {car.rating}
              </span>
              <span
                className={`${
                  car.available ? "text-green-500" : "text-red-500"
                } font-medium`}
              >
                {car.available ? "Available" : "Not Available"}
              </span>
            </div>
            <p className="text-gray-700 mb-6">{car.description}</p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex flex-col">
                <span className="font-semibold text-gray-600">Fuel</span>
                <span className="text-gray-800">{car.fuel_type}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-600">Seats</span>
                <span className="text-gray-800">{car.seats}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-600">
                  Transmission
                </span>
                <span className="text-gray-800">{car.transmission}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-600">Location</span>
                <span className="text-gray-800">{car.location}</span>
              </div>
            </div>
          </div>

          {/* Rent & Action */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xl font-bold text-secondary">
                ${car.rent_per_day} / day
              </p>
              <p className="text-gray-500 text-sm">
                Total for {car.quantity} day(s): ${car.totalPrice}
              </p>
            </div>
            <button className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary/90 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
