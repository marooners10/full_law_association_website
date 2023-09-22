import React, { useState } from "react";
import "../Components/ourwork.css";

const DynamicOurWork = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleIconClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const isDetailsVisible = activeIndex !== null; // Check if details are visible

  return (
    <div className={`our-work ${isDetailsVisible ? "active" : ""}`}>
      <div className="container_3">
        <h1>{props.title_3}</h1>
        <h4>{props.statement_3}</h4>
      </div>
      <div className="icon-row_3">
        {props.icons.map((icon, index) => (
          <div
            className={`our-work-i ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => handleIconClick(index)}
          >
            <i className={icon}></i>
          </div>
        ))}
      </div>
      <div className={`name-row_3 ${isDetailsVisible ? "active" : ""}`}>
        {props.names.map((name, index) => (
          <div className="our-work-i" key={index}>
            {name}
          </div>
        ))}
      </div>
      <div className={`work-detail-3 ${isDetailsVisible ? "active" : ""}`}>
        {isDetailsVisible && (
          <>
            <p>{props.paragraphs[activeIndex]}</p>
            <a href={props.urls[activeIndex]}>{props.readText}</a>
          </>
        )}
      </div>
    </div>
  );
};

export default DynamicOurWork;
