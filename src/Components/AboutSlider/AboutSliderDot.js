import React from "react";
import "../AboutSlider/aboutSlider.css";

const AboutSliderDots = ({ activeIndex, onClick, imageSlider }) => {
  return (
    <div className="all-dots_2">
      {imageSlider.map((slide, index) => (
        <span
          key={index}
          className={`${
            activeIndex === index ? "dot_2 active-dot_2" : "dot_2"
          }`}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};
export default AboutSliderDots;
