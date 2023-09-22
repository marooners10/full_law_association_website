import React from "react";
import "./imageContainer.css";

const DynamicImageContainer = (props) => {
  return (
    <div className="imag">
      <img src={props.img} alt="Images" />
      <h6>{props.t}</h6>
    </div>
  );
};

export default DynamicImageContainer;
