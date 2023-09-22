import React from "react";
import "../JoinSlider.js/joinSlider.css";

const JoinSliderDot = ({ activeIndex, onClick, imageSlider }) => {
  return (
    <div className="all-dots_j">
      {imageSlider.map((slide, index) => (
        <span
          key={index}
          className={`${
            activeIndex === index ? "dot_j active-dot_j" : "dot_j"
          }`}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default JoinSliderDot;
