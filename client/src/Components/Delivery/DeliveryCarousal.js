import React from "react";

//component
import DeliveryFoodCategory from "./DeliveryFoodCategory";
import FirstOrderCarousal from "./FirstOrderCarousal";


const DeliverySm = () => {
  return (
    <>
    <h1 className="text-xl font-semibold my-3">Eat what makes you happy!</h1>
    <div className="flex flex-wrap justify-between gap-3 rounded-md">
      <DeliveryFoodCategory />
      <DeliveryFoodCategory />
      <DeliveryFoodCategory />
      <DeliveryFoodCategory />
    </div>
    </>
  )
};

const DeliveryLg = () => {
  return (
    <>
    <div className="container mx-auto px-4 lg:px-20">
    <div className="items-start flex flex-col mt-4">
    <h2 className="font-semibold text-gray-800 text-3xl">Inspiration For Your First Order</h2>
    <div className="container mt-4 items-center">
      <FirstOrderCarousal />
    </div>
</div>
</div>
    </>
  )
};


const DeliveryCarousal = () => {
  return (
    <>
      <div className="lg:hidden">
        {
          <DeliverySm />
        }
      </div>
        <div className="hidden lg:block">
          {
            <DeliveryLg />
          }
        </div>

    </>
  );
};

export default DeliveryCarousal;
