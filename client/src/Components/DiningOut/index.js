import React from "react";

// components
import DiningOutCarousal from "./DiningOutCarousal";

const DiningOut = () => {
  return (
    <div className="container mx-auto px-4 lg:px-20 mt-4">
      <DiningOutCarousal />
      <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
        Dining Out Restaurants in Pune
      </h1>
    </div>
  );
};

export default DiningOut;
