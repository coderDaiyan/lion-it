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
        <div>
            <h2 className="text-center mt-5">Offer The Latest Software And <br /> Solutions To Our Customers!</h2>
            <div className="row w-100 mt-5">
                {
                    serviceData.map( service => <ServiceCard service={service}></ServiceCard>)
                }

                <p className="text-secondary mt-4 text-center">Working hard to earn our customer's trust. <span className="text-dark">Explore All Services </span></p>
            </div>
        </div>
    );
};

export default Services;