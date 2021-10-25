import React from "react";
import ImageGrid from "../Components/restaurant/ImageGrid";

//Components
import RestaurantNavbar from "../Components/Navbar/restaurant.navbar";

const RestaurantLayout = () => {
  return (
    <div className="container ml-16 items-start">
    <RestaurantNavbar />
    <div className="container ml-8 px-4 mt-8 lg:px-20 w-5/6">
      <ImageGrid images={["https://b.zmtcdn.com/data/pictures/chains/9/18335309/2cc323f411e2fdc298289a62474d7688.jpeg",
                          "https://b.zmtcdn.com/data/pictures/chains/9/18335309/c85dc63410117315e817a1f72805f53d.jpg",
                          "https://b.zmtcdn.com/data/pictures/chains/9/18335309/c85dc63410117315e817a1f72805f53d.jpg",
                          "https://b.zmtcdn.com/data/pictures/chains/9/18335309/c85dc63410117315e817a1f72805f53d.jpg",
                          "https://b.zmtcdn.com/data/pictures/chains/9/18335309/c85dc63410117315e817a1f72805f53d.jpg",
                        ]} />
    </div>
    </div>
  )
};

export default RestaurantLayout;
