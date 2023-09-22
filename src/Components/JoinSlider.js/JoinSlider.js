import React, { useState, useEffect } from "react";
import JoinTextSlider from "../JoinSlider.js/JoinTextSlider";
import "../JoinSlider.js/joinSlider.css";
import DynamicJoinSlider from "../JoinSlider.js/DynamicJoinSlider";
import JoinSliderDot from "../JoinSlider.js/JoinSliderDot";

const len = JoinTextSlider.length - 1;

const JoinSlider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to increment the active index automatically
  const autoSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    // Start the automatic slideshow timer
    const slideshowTimer = setInterval(autoSlide, 4000); // 4000 milliseconds (5 seconds)

    // Clear the timer when the component unmounts
    return () => clearInterval(slideshowTimer);
  }, []);

  return (
    <div className="slider-container_j">
      <DynamicJoinSlider
        activeIndex={activeIndex}
        AboutImageSlider={JoinTextSlider}
      />
      <JoinSliderDot
        activeIndex={activeIndex}
        imageSlider={JoinTextSlider}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};
export default JoinSlider;
