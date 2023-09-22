import React from "react";
import DynamicImageContainer from "../Components/DynamicImageContainer";
import "./imageContainer.css";
import patented from "../Components/Images/patented.jpg";
import trademark from "../Components/Images/trademark.jpg";
import litigation from "../Components/Images/litigation.jpg";
import familylaw from "../Components/Images/familylaw.jpg";
import government from "../Components/Images/government.jpg";
import Businesslaw from "../Components/Images/Businesslaw.jpg";
import piracy from "../Components/Images/piracy.jpg";
import court from "../Components/Images/court.jpg";
import legalprocess from "../Components/Images/legalprocess.jpg";
import cyberlaw from "../Components/Images/cyberlaw.jpg";
import employment from "../Components/Images/employment.jpg";
import contract from "../Components/Images/contract.jpg";
import company from "../Components/Images/company.jpg";
import crimelaw from "../Components/Images/crimelaw.jpg";
import organization from "../Components/Images/organization.jpg";
import visa from "../Components/Images/visa.jpg";

const ImageContainer = () => {
  //
  return (
    <div className="image-topic0">
      <h2>The Law Firms Areas of Practice</h2>
      <div>
        <div className="image-container">
          <DynamicImageContainer img={court} t="Supreme Court of Nepal" />
          <DynamicImageContainer img={patented} t="Patents & Innovations" />
          <DynamicImageContainer img={trademark} t="Global Trademarks" />
          <DynamicImageContainer img={litigation} t="Litigation" />
          <DynamicImageContainer img={familylaw} t="Family Law" />
          <DynamicImageContainer img={government} t="Government Relations" />
          <DynamicImageContainer
            img={Businesslaw}
            t="Corporate & Business Laws"
          />
          <DynamicImageContainer img={piracy} t="Anti-piracy & Copyrights" />
          <DynamicImageContainer
            img={legalprocess}
            t="Legal Processing Outsorucing"
          />
          <DynamicImageContainer img={cyberlaw} t="Cyber & IT Laws" />
          <DynamicImageContainer img={employment} t="Employment Law" />
          <DynamicImageContainer img={contract} t="Transactions & Contracts" />
          <DynamicImageContainer img={company} t="Company Incorporation" />
          <DynamicImageContainer img={crimelaw} t="Crime Lawyer" />
          <DynamicImageContainer
            img={organization}
            t="Not for Profit Organizations"
          />
          <DynamicImageContainer img={visa} t="VISA & Immigration" />
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
