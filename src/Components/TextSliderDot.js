import React from "react";

const Dots = ({ activeIndex, onClick, SliderText }) => {
  return (
    <div className="all-dots_1">
      {SliderText.map((slide, index) => (
        <span
          key={index}
          className={`${
            activeIndex === index ? "dot_1 active-dot_1" : "dot_1"
          }`}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};
export default Dots;
