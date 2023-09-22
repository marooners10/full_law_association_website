import React from "react";
import "./cover1.css";

const DynamicCover1 = (props) => {
  return (
    <div className="cover1">
      <img src={props.img} alt="" />
      <div className="cover1-1">
        <h1 className="cursive-banner">{props.banner}</h1>
        <h2>{props.heading}</h2>
        <p>{props.detail}</p>
        <ul>
          <li>
            <i className={props.icon}></i>
            <span>{props.text}</span>
          </li>
          <li>
            <i className={props.icon1}></i>
            <span>{props.text1}</span>
          </li>
          <li>
            <i className={props.icon2}></i>
            <span>{props.text2}</span>
          </li>
          <li>
            <i className={props.icon3}></i>
            <span>{props.text3}</span>
          </li>
        </ul>
        <div className={props.cName}>
          <a href={props.url}>{props.btn}</a>
        </div>
      </div>
    </div>
  );
};

export default DynamicCover1;
