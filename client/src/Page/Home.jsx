import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

//component
import Delivery from "../Components/Delivery";
import DiningOut from "../Components/DiningOut";
import NightLife from "../Components/NightLife";

//redux actions
import { getRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";

const Pages = () => {
  const { type } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant());
  }, []);

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
