import React from "react";
import { Link, useLoaderData } from "react-router";

const CarDetails = () => {
  const car = useLoaderData();

  const handleDelete = () => {
    // Add your delete logic here (API call to delete)
    console.log("Delete car:", car.name);
  };
  return (
    <div
      className="bg-no-repeat bg-cover bg-center w-full min-h-screen scroll-pt-28"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/2204254291/photo/3d-rendering-of-white-neon-glowing-spaceship-corridor-hallway-dark-background-scene-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=dYPVDyYIk7I8BGT4ABcxVsgYiJpCvqEPJd3DQjPd7Lo=')",
      }}
    >
      <div className="container mx-auto px-4 py-28 text-white">
        <div className="rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row md:gap-8 backdrop-blur-xs p-4 ">
          {/* Car Image */}
          <div className="md:w-1/2 flex-shrink-0">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Car Info */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                {car.name}
              </h2>
              <p className="text-lg   mb-4">{car.brand}</p>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="  font-semibold flex items-center">
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

              <p className="  mb-6">{car.description}</p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="flex flex-col">
                  <span className="font-semibold  ">Fuel</span>
                  <span className=" ">{car.fuel_type}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold  ">Seats</span>
                  <span className=" ">{car.seats}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold  ">Transmission</span>
                  <span className=" ">{car.transmission}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold  ">Location</span>
                  <span className=" ">{car.location}</span>
                </div>
              </div>
            </div>

            {/* Rent & Action Buttons */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xl font-bold text-secondary">
                  ${car.rent_per_day} / day
                </p>
                <p className="  text-sm">
                  Total for {car.quantity} day(s): ${car.totalPrice}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-3 md:mt-0">
                <button className="bg-primary btn btn-primary transition">
                  Book Now
                </button>
                <Link
                  to={`/update-car/${car._id}`}
                  className=" btn-secondary btn transition"
                >
                  Update
                </Link>
                <button
                  onClick={handleDelete}
                  className="btn btn-error btn-outline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
