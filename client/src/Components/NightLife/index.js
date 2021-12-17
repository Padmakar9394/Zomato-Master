import React from "react";

// components
import NightLifeCarousal from "./NightLifeCarousal";

const NightLife = () => {
  return (
    <div className="container mx-auto px-4 lg:px-20 mt-4">
      <NightLifeCarousal />
      <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
        Nightlife Restaurants in Vijay Pune
      </h1>
    </div>
  );
};

export default NightLife;
