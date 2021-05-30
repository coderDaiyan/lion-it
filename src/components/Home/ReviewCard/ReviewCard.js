import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
  return (
    <div className="col-md-4 col-sm-6 col-12 review-individual">
      <div style={{ width: "350px" }} className="card p-4 my-2 mb-5">
        <div>
          <p className="">{review.notes}</p>
        </div>
        <div className="d-flex align-items-center">
          <div className="p-2 ml-3 d-flex align-items-center">
            <h6 className="text-info">{review.name}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
