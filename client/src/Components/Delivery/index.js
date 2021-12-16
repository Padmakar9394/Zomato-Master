import React, {useState} from "react";

//components
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([
    {
      _id: "123456",
      photos: ["https://b.zmtcdn.com/data/pictures/7/19874657/1751d30eeab6038e4265b6c10be87dbf_o2_featured_v2.jpg"],
      name: "Shri Ji Pav Bhaji",
      cuisine: ["Street Food", "Beverages", "Tea"],
      averageCost: 100,
      isPro: true,
      isOff: 80,
      durationOfdelivery: 36,
      restaurantReviewValue: 3.5
    },
    {
      _id: "123456-1",
      photos: ["https://b.zmtcdn.com/data/pictures/chains/8/6506108/9f2f843523d0e8b9ecd9ee9ee32c1c46_o2_featured_v2.jpg"],
      name: "Burger King",
      cuisine: ["Burger", "Beverages", "Fast Food"],
      averageCost: 150,
      isPro: true,
      isOff: 60,
      durationOfdelivery: 48,
      restaurantReviewValue: 4.1
    },
    {
      _id: "123456-2",
      photos: ["https://b.zmtcdn.com/data/pictures/chains/9/18335309/783b127c0c237353a7b987fcc1bcc63e_o2_featured_v2.jpg"],
      name: "Ovenstory Pizza",
      cuisine: ["Pizza", "Desserts"],
      averageCost: 150,
      isPro: false,
      isOff: 70,
      durationOfdelivery: 32,
      restaurantReviewValue: 4.4
    },
  ]);
  return (
    <>
    <div className="container mx-auto px-4 lg:px-20 mt-16">
      <DeliveryCarousal />
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
        Delivery Restaurants in Pune
      </h1>
      <div className="flex justify-between flex-wrap">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            {...restaurant}
            key={restaurant._id}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Delivery;
