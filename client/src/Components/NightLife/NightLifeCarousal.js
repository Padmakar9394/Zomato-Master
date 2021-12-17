import React from "react";
import Slider from "react-slick";

// components
import CollectionCarousalCard from "../CollectionCarousal";
import { NextArrow, PrevArrow } from "../Carousal/Arrow";

const NightLifeCarousal = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        <CollectionCarousalCard />
        <CollectionCarousalCard />
        <CollectionCarousalCard />
        <CollectionCarousalCard />
        <CollectionCarousalCard />
        <CollectionCarousalCard />
        <CollectionCarousalCard />
      </Slider>
    </div>
  );
};

export default NightLifeCarousal;
