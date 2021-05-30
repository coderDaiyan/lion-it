import React from "react";
import serviceData from "../../../fakeData/servicedata.json";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";

const Services = () => {
  return (
    <section className="mt-5 mb-5 container">
      <h2 className="text-center mt-5">
        Offer The Latest Software And <br /> Solutions To Our Customers!
      </h2>{" "}
      <br />
      <div className="row w-100 mt-5">
        {serviceData.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}

        <p className="text-secondary mt-4 text-center">
          Working hard to earn our customer's trust.{" "}
          <span className="text-dark">Explore All Services </span>
        </p>
      </div>{" "}
      <br />
    </section>
  );
};

export default Services;
