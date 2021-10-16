import React from "react";

//Components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

const HomeLayout = (props) => {
  return( <>
    <div className="container mx-auto lg:px-20">
    <Navbar />
    <div className="lg:mt-5 mb-24">
      <FoodTab />
    </div>
    {props.children}
    </div>
  </>
)
};

export default HomeLayout;
