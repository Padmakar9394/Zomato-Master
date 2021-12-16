import React from "react";
import Slider from "react-slick";

// components
import DeliveryCategory from "./DeliveryCategory";
import { NextArrow, PrevArrow } from "../Carousal/Arrow";

const DeliveryCarousal = () => {
  const categories = [
    {
      image: "https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
      title: "Biryani"
    },
    {
      image: "https://b.zmtcdn.com/data/o2_assets/ed782b0b295520da4d4d92c01fb779811632716695.png",
      title: "Basundi"
    },
    {
      image: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
      title: "Pizza"
    },
    {
      image: "https://b.zmtcdn.com/data/o2_assets/3d902eb4bb267efea010ade87bcb1f3f1632716698.png",
      title: "Chaat"
    },
    {
      image: "https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
      title: "Burger"
    },
    {
      image: "https://b.zmtcdn.com/data/o2_assets/adbe5236974520ecba7cb9f47e4c92011632716658.png",
      title: "Chicken"
    },
    {
      image: "https://b.zmtcdn.com/data/o2_assets/b78083afb63995c7e0a676d01dcc164d1632716549.png",
      title: "Thali"
    },
    {
      image: "https://b.zmtcdn.com/data/o2_assets/7f5ceb9a6ae7e662ba2fec0e994fc0ad1632716550.png",
      title: "Veg Kolhapuri"
    },
  ];
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <h1 className="lg:hidden text-xl mb-4 font-semibold">
        Eat what makes you happy!
      </h1>
      <h1 className="hidden lg:block text-3xl mb-4 font-semibold">
        Inspiration for your first order
      </h1>
      <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
        {categories.map((food) => (
          <DeliveryCategory {...food} />
        ))}
      </div>

      <div className="hidden lg:block">
        <Slider {...settings}>
          {categories.map((food) => (
            <DeliveryCategory {...food} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default DeliveryCarousal;
