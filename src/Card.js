import React from "react";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={props.img} alt={props.name} loading="lazy" />
      </div>
      <div className="details-container">
        <div className="name-container">
          <div className="name">{props.name}</div>
          <div className="year">{props.year}</div>
        </div>
        <div className="rocket-container">
          <div className="rocket">{props.rocket}</div>
          <div className="type">{props.type}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
