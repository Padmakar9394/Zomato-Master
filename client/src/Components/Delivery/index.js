import React from "react";

//components
import DeliveryCarousal from "./DeliveryCarousal";
import FoodCard from "./FoodCard/FoodCard";

const Delivery = () => {
  return (
    <>
    <div className="mt-16">
      <DeliveryCarousal />
      <FoodCard />
    </div>
    </>
  );
};

export default Delivery;
