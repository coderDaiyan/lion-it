import React from 'react';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Schedule from '../Schedule/Schedule';
import Services from '../Services/Services';

function Home(props) {
    return (
        <div>
            <Header></Header>
            
            <Schedule></Schedule>
            <Services></Services>
            <Review></Review>
        </div>
    );
}

export default Home;