import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
    return (
        
            <div className="col-md-4 col-sm-6 col-12 d-flex justify-content-center">
                <div className="card p-4 my-2">
                    <div>
                        <p className="">{review.quote}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="p-2 review-img"><img src={review.img} alt="" /></div>
                        <div className="p-2 ml-3 d-flex align-items-center" >
                            <h6 className="">{review.name}
                                <br />
                                <span className="text-secondary">{review.from}</span>
                            </h6>
                        </div>
                    </div>

                </div>
            </div>
        
    );
};

export default ReviewCard;