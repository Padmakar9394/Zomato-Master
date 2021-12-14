import React from "react";

//components
import DeliveryCarousal from "./DeliveryCarousal";
import FoodCard from "./FoodCard";

const Delivery = () => {
  return (
    <>
    <div className="container mx-auto px-4 lg:px-20 mt-16">
      <DeliveryCarousal />
      <FoodCard />
    </div>
    </>
  );
};

export default Delivery;
