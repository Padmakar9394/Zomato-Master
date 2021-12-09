import React from "react";
import {BsShieldLockFill} from "react-icons/bs";

//Components
import FoodItem from "../Components/Cart/FoodItem";
import AddressList from "../Components/Checkout/AddressList";

const Checkout = () => {
  const address = [
    {
      name: "Home",
      address: "India"
    },
    {
      name: "Gym",
      address: "India"
    },
    {
      name: "Office",
      address: "India"
    }
  ];
  return (
    <>
    <div className="flex flex-col gap-3 my-3 items-center">
      <h1 className="text-xl text-center md:text-2xl font-bold">Checkout</h1>
      <div className="w-full md:w-3/5 bg-white py-3 rounded-lg shadow-lg flex flex-col items-center">
        <h3 className="text-lg font-semibold">Summary</h3>
        <div className="flex w-full flex-col gap-2 items-center">
          <h5 className="text-base tracking-wider">ORDER FROM</h5>
          <div className="w-full flex flex-col items-center text-gray-500">
            <h4>Domino's Pizza</h4>
            <small>GT World Mall, Magadi Road, Pune</small>
          </div>
          <div className="my-4 px-4 flex flex-col gap-2 w-full md:w-3/5">
            <FoodItem name="Pizza" quantity={3} price={80}/>
            <FoodItem name="Pizza" quantity={3} price={80}/>
            <FoodItem name="Pizza" quantity={3} price={80}/>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-3/5">
            <h4 className="text-xl font-semibold">Choose Address</h4>
            <AddressList address={address}/>
          </div>
        </div>
        <button className="flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 md:px-0 h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg">
        Pay Securely <BsShieldLockFill />
        </button>
      </div>
    </div>
    </>
  )
};

export default Checkout;
