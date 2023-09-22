import React from "react";
import "./slider.css";

const SliderContent = ({ activeIndex, imageSlider }) => {
  return (
    <div>
      <section>
        {imageSlider.map((slide, index) => (
          <div
            key={index}
            className={index === activeIndex ? "slides active" : "inactive"}
          >
            <img className="slide-image" src={slide.urls} alt="" />
            <h2 className="slide-title">{slide.title}</h2>
            <h4 className="slide-text">{slide.text}</h4>
          </div>
        ))}
      </section>
    </div>
  );
};
export default SliderContent;
