import React from "react";
import "./card.css";

const Card = ({heading, detail,details, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      
      <span>{heading}</span>
      <span>{detail}</span>
      <span>{details}</span>
    </div>
  );
};

export default Card;
