import React from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";


import ImageGrid from "../Components/restaurant/ImageGrid";
import RestaurantInfo from "../Components/restaurant/restaurantinfo";
import InfoButtons from "../Components/restaurant/InfoButtons";
import TabContainer from "../Components/restaurant/Tabs";


//Components
import RestaurantNavbar from "../Components/Navbar/restaurant.navbar";

const RestaurantLayout = (props) => {
  return (
    <div className="container lg:ml-16 items-start">
    <RestaurantNavbar />
    <div className="container w-full px-4 mt-4 lg:mt-8 lg:px-20 lg:w-5/6">
      <ImageGrid images={["https://b.zmtcdn.com/data/pictures/chains/9/18335309/2cc323f411e2fdc298289a62474d7688.jpeg",
                          "https://b.zmtcdn.com/data/pictures/chains/9/18335309/c85dc63410117315e817a1f72805f53d.jpg",
                          "https://b.zmtcdn.com/data/pictures/chains/9/18335309/c85dc63410117315e817a1f72805f53d.jpg",
                          "https://b.zmtcdn.com/data/pictures/chains/9/18335309/c85dc63410117315e817a1f72805f53d.jpg",
                          "https://b.zmtcdn.com/data/pictures/chains/9/18335309/c85dc63410117315e817a1f72805f53d.jpg",
                        ]} />
        <RestaurantInfo
          name="Ovenstory Pizza"
          restaurantRating="4.2"
          deliveryRating="4.7"
          cuisine="Pizza, Desserts"
          address="Shaniwar Peth, Pune"
         />
         <div className="flex flex-wrap gap-3">
            <InfoButtons isActive>
              <TiStarOutline /> Add Review
            </InfoButtons>
            <InfoButtons>
              <BiBookmarkPlus /> Direction
            </InfoButtons>
            <InfoButtons>
              <BiBookmarkPlus /> Bookmark
            </InfoButtons>
            <InfoButtons>
              <RiShareForwardLine /> Share
            </InfoButtons>
        </div>
        <div className="my-10">
          <TabContainer />
        </div>
        <div className="relative">{props.children}</div>
    </div>
    </div>
  )
};

export default RestaurantLayout;
