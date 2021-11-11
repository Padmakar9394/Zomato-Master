import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useParams } from "react-router-dom";
import {AiFillCaretRight} from "react-icons/ai";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../Components/Carousal/Arrow";

//component
import MenuCollection from "../../Components/restaurant/MenuCollection";
import MenuSimilarRestaurantCard from "../../Components/restaurant/MenuSimilarRestaurantCard";
import ReviewCard from "../../Components/restaurant/Reviews/reviewCard";

const Overview = () => {

  const { id } = useParams();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row relative">
        <div className="w-full md:w-8/12">
          <h2 className="font-semibold text-lg md:text-xl my-4">About this place</h2>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-1 text-zomato-400">
                See all menu <AiFillCaretRight />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
          <MenuCollection
              menuTitle="Menu"
              pages="3"
              image="https://b.zmtcdn.com/data/menus/309/18335309/b75c0e2003dac80722be174d161c96fc.jpg"
              />
          </div>
          <h4 className="text-lg font-medium my-4">Cuisines</h4>
          <div classnames="flex flex-wrap gap-2">
            <span className="border border-gray-500 text-blue-600 px-2 py-1 rounded-full">Pizza</span>
            <span className="border border-gray-500 text-blue-600 px-2 py-1 rounded-full">Desserts</span>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6 className="text-lg font-regular">₹250 for one order (approx.)</h6>
            <small className="text-gray-400">Exclusive of applicable taxes and charges, if any</small>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Similar Restaurants</h4>
            <div>
              <Slider {...settings}>
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
              </Slider>
            </div>
            </div>
          <div>
            <h4 className="text-lg font-medium">Rate your delivery experience</h4>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
              />
          </div>
          <div className="flex flex-col my-4">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:block sticky md:w-4/12 bg-white p-3 shadow-xl top-2"
          ></aside>
      </div>
    </>
  )
};

export default Overview;
