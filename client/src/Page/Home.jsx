import React from "react";
import { useParams } from "react-router-dom";

//component
import Delivery from "../Components/Delivery";
import DiningOut from "../Components/DiningOut";
import NightLife from "../Components/NightLife";

const Pages = () => {
  const { type } = useParams();

  return(
    <>
    <div className="">
      {type=== "delivery" && <Delivery />}
    </div>
    <div className="">
      {type=== "DiningOut" && <DiningOut />}
    </div>
    <div className="">
      {type=== "NightLife" && <NightLife />}
    </div>
    </>
  )
};

export default Pages;
