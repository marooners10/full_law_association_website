import React from "react";
import "./hero.css";

const Hero = (props) => {
  return (
    // making whole div dynamic
    <div className={props.cName}>
      <img alt="background" src={props.heroImg} />
      <div className="hero-texted">
        {/* hero section */}
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.btnText}
        </a>
      </div>
    </div>
  );
};
export default Hero;
