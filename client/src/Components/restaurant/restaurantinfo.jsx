import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

const RestaurantInfo = (props) => {
  return (
    <>
      <div className="my-4">
        <div className="flex flex-col flex-col-reverse md:flex-row md:items-center justify-between gap-3">
            <h1 className="text-xl md:text-3xl text-gray-700 font-semibold md:font-bold">{props.name}</h1>
          <div className="flex items-center gap-6 text-xs md:text-base">
            <div className="flex items-center gap-2">
              <span className="flex rounded text-white gap-1 font-medium items-center bg-green-600 py-1 px-2">
                {props.restaurantRating} <TiStarFullOutline />
              </span>
              <span className="">
                <p>117</p>
                <p className="border-dashed border-b-2 border-gray-400">Dining Reviews</p>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex rounded text-white gap-1 font-medium items-center bg-green-600 py-1 px-2">
                {props.deliveryRating} <TiStarFullOutline />
              </span>
              <span className="">
                <p>4251</p>
                <p className="border-dashed border-b-2 border-gray-400">Delivery Reviews</p>
              </span>
            </div>
          </div>
        </div>
        <div className="text-gray-600 text-base md:text-lg">
          <h3>{props.cuisine}</h3>
          <h3 className="text-gray-400">{props.address}</h3>
          <h3>
            <span className="text-yellow-500">Open Now</span> - 11am - 8pm
          </h3>
        </div>
      </div>
    </>
  )
};

export default RestaurantInfo;
