import React, { use } from "react";
import CarCard from "../CarCard/CarCard";

const LatestCar = ({ latestCars }) => {
  const Cars = use(latestCars);
  return (
    <div className="">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 heading-font ">
          Latest Cars
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {Cars.map((car) => (
            <CarCard car={car} key={car._id}></CarCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestCar;
