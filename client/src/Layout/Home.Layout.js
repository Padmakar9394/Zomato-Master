import React from "react";

//Components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

const HomeLayout = (props) => {
  return( <>
    <Navbar />
    <div className="container mx-auto px-4 lg:px-20">
      <div className="mt-8">
        <FoodTab />
      </div>
    {props.children}
    </div>
  </>
)
};

export default HomeLayout;
