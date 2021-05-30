import React from 'react';
import man from '../../images/man-avatar.png';
import woman from '../../images/woman-avatar.png';
import ReviewCard from '../ReviewCard/ReviewCard';

const reviewData = [
    {
        id: 1,
        img: man,
        name: 'Khairul Islam',
        from: 'Periodic think, USA',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore unde esse corrupti voluptate commodi explicabo?'
    },
    {
        id: 2,
        img: woman,
        name: 'Sabrina Carpentar',
        from: 'Colom, Canada',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore unde esse corrupti voluptate commodi explicabo?'
    },
    {
        id: 3,
        img: man,
        name: 'Walter White',
        from: 'Gray Matter, USA',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore unde esse corrupti voluptate commodi explicabo?'
    }
]

const Review = () => {
    return (
        <section className="" style={{backgroundColor: '#efeff0', padding: '5px'}}>
            <div className="text-center mb-5 mt-5">
                <h4 className="text-uppercase" data-testid="review-1">Look, What People Say</h4>
                <h1 className="text-uppercase">About Us</h1>
            </div>
            <div className="row mb-5 w-100 mx-auto">
                {
                    reviewData.map( review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Review;
