import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';

const serviceData = [
    {
        title: 'IT Management Service', 
        desc: 'IT management service that manages and oversees the IT of organization responsible for network and operations which includes data communication.'
    },
    {
        title: 'Cyber Security Service', 
        desc: 'IT management service that manages and oversees the IT of organization responsible for network and operations which includes data communication.'
    },
    {
        title: 'Cloud Computing Service', 
        desc: 'IT management service that manages and oversees the IT of organization responsible for network and operations which includes data communication.'
    }
]

const Services = () => {
    return (
        <div className="service-container">
            <div className="my-5" style={{position: 'relative'}}><h2   className="text-center mt-5">Offer The Latest Software And <br /> Solutions To Our Customers!</h2></div>
            <div className="row w-100 mt-5">
                {
                    serviceData.map( service => <ServiceCard service={service}></ServiceCard>)
                }

                <p style={{position: 'relative'}} className="mt-5 text-center">Working hard to earn our customer's trust. <a href="#" className="text-primary">Explore All Services </a></p>
            </div>
        </div>
    );
};

export default Services;