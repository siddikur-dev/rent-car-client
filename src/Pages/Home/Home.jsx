import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden pt-20">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://v.ftcdn.net/16/67/27/44/700_F_1667274462_964vfV0tkKLi3vCemIbRVHDhCTp0Rcs2_ST.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 text-white mx-auto container py-6">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold max-w-2xl leading-snug heading-font"
        >
          Drive your journey with{" "}
          <span className="text-primary">Rent A Car</span> — reliable,
          comfortable, and modern rentals for every road.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-lg max-w-xl text-gray-200"
        >
          Find your perfect ride anytime, anywhere. Affordable rates, seamless
          booking, and a fleet you can trust.
        </motion.p>

        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
          className="mt-8 w-fit flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Book Your Car <span className="text-xl">→</span>
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
