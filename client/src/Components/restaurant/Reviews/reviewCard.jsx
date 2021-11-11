import React from "react";
import { TiStar } from "react-icons/ti";

const reviewCard = () => {
  return (
    <>
    <div className="my-3 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full">
            <img
              src="https://b.zmtcdn.com/data/user_profile_pictures/0b2/c68748bff51f79dc02a06aa6aaaa20b2.jpg"
              alt="avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">Padmakar Gore</h4>
            <small className="text-gray-500">5 reviews &#8226; 3 Follwers</small>
          </div>
        </div>
        <button className="text-zomato-500 border border-zomato-500 px-4 py-2 rounded-md">Follow</button>
      </div>
      <div className="flex items-center gap-3">
        <span className="flex text-white bg-green-700 items-center rounded-md px-1 text-sm"> 5 <TiStar /></span>
        <h4 className="font-regular uppercase text-xs">delivery</h4>
        <small className="text-gray-500 font-regular text-sm">2 days ago</small>
      </div>
      <div className="w-full">
      <p className="w-full text-base text-gray-600 font-regular">
        perfect portion and amazing taste..i order usually from here
      </p>
      </div>
    </div>
    </>
  )
};

export default reviewCard;
