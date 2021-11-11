import React, {useState} from "react";
import ReactStars from "react-rating-stars-component";

//components
import ReviewCard from "../../Components/restaurant/Reviews/reviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState(["","",""]);

  const handleRating = (value) => {
    console.log(value);
  }
  return (
    <>
    <div className="flex flex-col md:flex-row relative">
        <div className="w-full md:w-8/12 flex flex-col gap-3">
          {reviews.map((review) => (
          <ReviewCard {...review} />
          ))}
        </div>
        <aside
        style={{ height: "fit-content" }}
        className="hidden md:flex items-start md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Rate your experience</h3>
          <div className="flex items-center gap-3 text-lg font-regular">
              <div className="flex items-center gap-2">
                <input type="radio" name="review" id="dining" />
                <label htmlFor="dining">Dining</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="review" id="delivery" />
                <label htmlFor="delivery">Delivery</label>
              </div>
          </div>
          <div>
            <ReactStars count={5} onChange={handleRating} size={24} />
          </div>
          <button className="text-zomato-400">Write a review</button>
          </aside>
    </div>
    </>
  )
};

export default Reviews;
