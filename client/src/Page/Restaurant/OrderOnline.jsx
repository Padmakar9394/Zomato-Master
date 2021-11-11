import React from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

//Components
import FloatMenuBtn from "../../Components/restaurant/Order-Online/FloatMenuBtn";
import MenuListContainer from "../../Components/restaurant/Order-Online/MenuListContainer";
import FoodItem from "../../Components/restaurant/Order-Online/FoodItem";
import FoodList from "../../Components/restaurant/Order-Online/FoodList";

const OrderOnline = () => {
  return (
    <>
      <div className="w-full h-screen flex">
        <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-auto border-gray-200 h-screen w-1/4">
          <MenuListContainer />
          <MenuListContainer />
          <MenuListContainer />
        </aside>
        <div className="w-full px-3 md:w-3/4">
          <div className="pl-3 mb-4">
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="flex items-center gap-4 font-light text-gray-500">
            <AiOutlineCompass /> Live track your order | <BiTimeFive /> 32 min
            </h4>
          </div>
          <section className="flex flex-col h-screen overflow-y-scroll gap-3 md:gap-5">
            <FoodList
              title="Recommended"
              items={[
                {
                image: "https://b.zmtcdn.com/data/dish_photos/2b3/d8079adb1fb2b56172cfaff0df9112b3.jpg",
                title: "Cheese Infused Garlic Bread (with Free Cheese Dip)",
                price: "135",
                rating: 4,
                description: "Fresh flatbread baked with garlic butter and chefs secret seasoning, infused with creamy el-classico cheese. Served with a cheese dip to make it an extra cheesy affair!",
              },
              {
              image: "https://b.zmtcdn.com/data/dish_photos/2b3/d8079adb1fb2b56172cfaff0df9112b3.jpg",
              title: "Cheese Infused Garlic Bread (with Free Cheese Dip)",
              price: "135",
              rating: 4,
              description: "Fresh flatbread baked with garlic butter and chefs secret seasoning, infused with creamy el-classico cheese. Served with a cheese dip to make it an extra cheesy affair!",
            },
            {
            image: "https://b.zmtcdn.com/data/dish_photos/2b3/d8079adb1fb2b56172cfaff0df9112b3.jpg",
            title: "Cheese Infused Garlic Bread (with Free Cheese Dip)",
            price: "135",
            rating: 4,
            description: "Fresh flatbread baked with garlic butter and chefs secret seasoning, infused with creamy el-classico cheese. Served with a cheese dip to make it an extra cheesy affair!",
          },
              ]}
            />
          </section>
        </div>
      </div>
      <FloatMenuBtn />
    </>
  )
};

export default OrderOnline;
