import React from "react";
import DynamicCover1 from "./DynamicCover1";
import rep from "../Components/Images/rep.jpg";
import "./cover1.css";

const Cover1 = () => {
  return (
    <div className="about-container1">
      <div className="cover-1">
        <DynamicCover1
          banner="Specialist practitioners"
          img={rep}
          heading="IN A RANGE OF PRACTICE AREAS"
          detail="The law firm has extensive expertise in banking and finance, corporate and commercial, litigation and arbitration, and mergers and acquisitions. We assist multinationals, foreign investors and high growth companies in aviation, power, hotels, financial services, insurance, manufacturing, and technology sectors."
          icon="fas fa-square"
          text="Banking & Finance"
          icon1="fas fa-square"
          text1="Corporate & Commercial"
          icon2="fas fa-square"
          text2="Litigation & Arbitration"
          icon3="fas fa-square"
          text3="Mergers & Acquisitions"
          cName="ffff1"
          url="/practice-area"
          btn="LEARN MORE"
        />
      </div>
    </div>
  );
};

export default Cover1;
