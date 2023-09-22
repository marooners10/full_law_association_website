import React from "react";
import "./sector.css";

const SectorHero = (props) => {
  return (
    // making whole div dynamic
    <div className={props.cName}>
      <img
        className="dim-image"
        style={{ opacity: props.imgOpacity }}
        alt="background"
        src={props.heroImg}
      />
      <div className="hero-text-sector">
        {/* hero section */}
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <div className="sector-text">
          <div className="text-1">
            <i className={props.icon1}></i>
            <h2>{props.heading1}</h2>
            <p>{props.detail1}</p>
          </div>
          <div className="text-2">
            <i className={props.icon2}></i>
            <h2>{props.heading2}</h2>
            <p>{props.detail2}</p>
          </div>
          <div className="text-3">
            <i className={props.icon3}></i>
            <h2>{props.heading3}</h2>
            <p>{props.detail3}</p>
          </div>
          <div className="text-4">
            <i className={props.icon4}></i>
            <h2>{props.heading4}</h2>
            <p>{props.detail4}</p>
          </div>
          <div className="text-5">
            <i className={props.icon5}></i>
            <h2>{props.heading5}</h2>
            <p>{props.detail5}</p>
          </div>
          <div className="text-6">
            <i className={props.icon6}></i>
            <h2>{props.heading6}</h2>
            <p>{props.detail6}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectorHero;
