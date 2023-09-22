import React from "react";

const TextContentSlider = ({ activeIndex, SliderText }) => {
  return (
    <div>
      <section>
        {SliderText.map((slide, index) => (
          <div
            key={index}
            className={index === activeIndex ? "slides active_1" : "inactive_1"}
          >
            <h2 className="slide-title_1">{slide.title_1}</h2>
            <h6 className="slide-date_1">{slide.date_1}</h6>
            <p className="slide-text_1">{slide.text_1}</p>
            <a href="/" className="slide-url_1">
              {slide.url_1}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TextContentSlider;
