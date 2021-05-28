import React from 'react';

const ServiceCard = ({service}) => {

    return (
        <div className="col-md-4 d-flex justify-content-center">
            <div className="card p-5 text-center">
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
                <button className="btn btn-primary">Try This</button>
            </div>
        </div>
    );
};

export default ServiceCard;