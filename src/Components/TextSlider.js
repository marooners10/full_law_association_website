import React, { useState, useEffect } from "react";
import SliderText from "./SliderText";
import TextContentSlider from "./TextContentSlider";
import TextSliderDot from "./TextSliderDot";
import "./textSlider.css";

const len = SliderText.length - 1;
const TextSLider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to increment the active index automatically
  const autoSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    // Start the automatic slideshow timer
    const slideshowTimer = setInterval(autoSlide, 400000); // 4000 milliseconds (5 seconds)

    // Clear the timer when the component unmounts
    return () => clearInterval(slideshowTimer);
  }, []);
  return (
    <div className="slider-container1">
      <TextContentSlider activeIndex={activeIndex} SliderText={SliderText} />
      <TextSliderDot
        activeIndex={activeIndex}
        SliderText={SliderText}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};
export default TextSLider;
