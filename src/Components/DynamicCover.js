import React from "react";
const DynamicCover = (props) => {
  return (
    <div className="cover">
      <img src={props.img} alt="" />
      <p>
        <h1 className="cursive-banner">{props.banner}</h1>
        <h2>{props.heading}</h2>
        {props.detail}
        <br />
        <br />
        {props.detail1}
      </p>
    </div>
  );
};
export default DynamicCover;
