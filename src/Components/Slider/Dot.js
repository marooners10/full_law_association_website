import React from "react";
import "./slider.css";

const Dots = ({ activeIndex, onClick, imageSlider }) => {
  return (
    <div className="all-dots">
      {imageSlider.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};
export default Dots;
