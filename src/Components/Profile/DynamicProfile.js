import React from "react";
import "../Profile/profile.css";

const DynamicProfile = (props) => {
  return (
    <div className="n-profile">
      <div className="gradiant"></div>
      <div className="n-image">
        <img alt="profile" src={props.img} />
      </div>
      <h4>{props.name}</h4>
      <p>{props.detail}</p>
      <p>{props.contact}</p>
      <div className="profile-btn">
        <a href={props.email}>{props.select}</a>
      </div>
    </div>
  );
};
export default DynamicProfile;
