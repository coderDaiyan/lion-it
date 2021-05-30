import React from "react";
import { useSelector } from "react-redux";
import ReviewCard from "../ReviewCard/ReviewCard";

const Review = () => {
  const state = useSelector((state) => state.review.reviews.slice(0, 3));

  return (
    <section className="mt-5 review_card">
      <div className="text-center mb-5 mt-5">
        <h4 className="text-uppercase">Look, What People Say</h4>
        <h1 className="text-uppercase">About Us</h1>
      </div>
      <div className="row mb-5 w-100 p-5">
        {state.map((review) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>
    </section>
  );
};

export default Review;
