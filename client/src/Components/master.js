import React from "react";
import { useParams } from "react-router-dom";

//component
import Delivery from "./Delivery";
import DiningOut from "./DiningOut";
import NightLife from "./NightLife";

const Master = () => {
  const { type } = useParams();

  return(
    <>
    <div className="m-4">
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

export default Master;
