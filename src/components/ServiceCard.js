import React from "react";
import "./../styles/ServiceCard.css";

const ServiceCard = ({ service }) => {
    return (
        <div className="service-card">
            <img src={service.image} alt={service.name} />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <button className="btn-service">Chi tiết</button>
        </div>
    );
};

export default ServiceCard;
