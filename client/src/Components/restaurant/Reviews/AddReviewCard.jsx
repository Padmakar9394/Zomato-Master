import React from "react";

const AddReviewCard = () => {
  return (
    <>
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
    <button className="text-zomato-400">Write a review</button>
    </>
  );
};

export default AddReviewCard;
