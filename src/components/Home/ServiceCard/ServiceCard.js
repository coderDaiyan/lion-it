import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  return (
    <div className="col-md-4 d-flex justify-content-center ">
      <div className="card service_card p-5 text-center">
        <h4>{service.title}</h4>
        <p>{service.desc}</p>
        <Link
          className="text-white text-decoration-none"
          to={`/dashboard/order/${service.id}`}
        >
          <button className="btn btn-primary">Try This</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
