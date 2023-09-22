import React from "react";

const AboutSlideContent = ({ activeIndex, AboutImageSlider }) => {
  return (
    <div>
      <section>
        {AboutImageSlider.map((slide, index) => (
          <div
            key={index}
            className={
              index === activeIndex ? "slides_2 active_2" : "inactive_2"
            }
          >
            <img className="slide-image_2" src={slide.pic} alt="" />
            <h2 className="slide-title_2">{slide.title_2}</h2>
            <h3 className="slide-text_2">{slide.text_2}</h3>
            <h5 className="slide-by_2">{slide.by_2}</h5>
          </div>
        ))}
      </section>
    </div>
  );
};
export default AboutSlideContent;
