import React, { useState, useEffect } from "react";
import imageSlider from "../Slider/ImageSlider";
import "./slider.css";
import SliderContent from "./SlideContent";
import Dot from "./Dot";
import Arrow from "./Arrow";

const len = imageSlider.length - 1;

const Slider = (props) => {
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
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
      <Arrow
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dot
        activeIndex={activeIndex}
        imageSlider={imageSlider}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};
export default Slider;
