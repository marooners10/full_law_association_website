import React from "react";

const DynamicJoinSlider = ({ activeIndex, AboutImageSlider }) => {
  return (
    <div>
      <section>
        {AboutImageSlider.map((slide, index) => (
          <div
            key={index}
            className={
              index === activeIndex ? "slides_j active_j" : "inactive_j"
            }
          >
            <h3 className="slide-text_j">{slide.text_j}</h3>
            <h5 className="slide-by_j">{slide.by_j}</h5>
          </div>
        ))}
      </section>
    </div>
  );
};
export default DynamicJoinSlider;
