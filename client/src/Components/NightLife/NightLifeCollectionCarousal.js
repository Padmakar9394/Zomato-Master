import React from "react";

import Slider from "react-slick";
import { PrevArrow, NextArrow } from "../Carousal/Arrow";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CollectionCard = (props) => {
  return (
    <>
    <div className="w-full h-64 px-2">
    <img
      className="w-full h-full object-cover rounded-xl"
      src={props.src}
      alt="Collection Image"
     />
    </div>
    </>
  );
};

const NightLifeCollection = () => {
  const settings = {
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    InitialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  }

  const CollectionImages = [
    "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpbmtzJTIwYXQlMjBiYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJpbmtzJTIwYXQlMjBiYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1622720757991-6590da48aa50?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZHJpbmtzJTIwYXQlMjBiYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://b.zmtcdn.com/data/collections/eb69f5f6e70ac43c8c0923fef39fabaf_1535615947.jpg",
    "https://b.zmtcdn.com/data/collections/1b8c164e8a18878468d8aabeb0b486b1_1625812715.jpg",
    "https://b.zmtcdn.com/data/collections/332d70c0ff0894191d1661739ce18fbd_1605194226.jpg",
    "https://b.zmtcdn.com/data/collections/9bbfe4d4a19b26430fa930295ec88bc5_1615975717.jpg"
  ]


  return (
    <>
      <Slider {...settings}>
        {CollectionImages.map((image) => (
          <CollectionCard src={image} />
        ))}
      </Slider>
    </>
  );
};

export default NightLifeCollection;
