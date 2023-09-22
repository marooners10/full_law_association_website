import React from "react";
import Navbar from "../Navbar";
import AboutSlider from "../AboutSlider/AboutSlider";
import Sector from "../Sector";
import ten from "../Images/sector.jpg";
import Hero from "../Hero";
import "./about.css";
import AboutFooter from "../AboutFooter";
import AboutBelowFooter from "../AboutBelowFooter";
import OurWork from "../OurWork";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg="https://images.unsplash.com/photo-1634143407677-e19f75512b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1615&q=80"
        title="NEPAL'S LEADING LAW FIRM"
        text="We deliver the highest international standards with an extensive local expertise."
        btnText="Travel Plan"
        url="#"
        btnClass="hide"
      />
      <OurWork />
      <AboutSlider />
      <Sector
        cName="sector-hero"
        heroImg={ten}
        title="SECTORS"
        text="We have indepth expertise in all key sectors of the economy such as aviation, financial serices, hospitality
        energy, infrastructure, and others."
        imgOpacity={0.9}
        icon1="fas fa-plane"
        heading1="AVIATION"
        detail1="We have extensive experience in aircraft leasing, financing, sale and purchase, M&A, litigation, and corporate advisory work. We work with leading airlines, banks, leasing companies, and investors."
        icon2="fas fa-briefcase"
        heading2="FINANCIAL SERVICES"
        detail2="We advise in lending and security, cross-border transactions, project finance, insurance, and loan syndications. We also have experience in fin-tech, payments systems, and financial regulations."
        icon3="fas fa-bell-concierge"
        heading3="HOSPITALITY"
        detail3="Our expertise lies in new developments, M&A, financing, franchising, and intellectual property. We have advised in the development of many leading hotels, shopping malls, and infrastructures."
        icon4="fas fa-gear"
        heading4="INDUSTRIAL"
        detail4="We have extensive experience in M&A, financing, commercial, and regulatory matters in the industrial and manufacturing sectors. We also advise in investment, trade, employment, and taxation issues."
        icon5="fas fa-solid fa-screwdriver-wrench"
        heading5="INFRASTRUCTURE"
        detail5="We advise in joint ventures, M&A, PPP, concession agreements, regulatory, and licensing issues. We have market leading expertise in project finance for large-scale hydropower and infrastructure projects."
        icon6="fas fa-solid fa-globe"
        heading6="TECHNOLOGY"
        detail6="We also have extensive market entry, M&A, private equity, and regulatory experience in this tech and telecom sectors. We are proud to have contributed to many market developments in this sector."
      />
      <div className="appointment1">
        <h2>A HIGHLY REGARDED PRACTICE</h2>

        <p>
          We are ranked as one of the top law firms in Nepal by legal
          publications. They have recognized us for "excellent knowledge and
          practice experience of business law in Nepal and Nepali legal
          practicalities", "extensive expertise in handling complex and
          high-value mandates", "business-focused and timely advice” and "highly
          recommended by both international clients and law firms."
        </p>
        <div>
          <a href="/signup">LEARN MORE</a>
        </div>
      </div>
      <AboutFooter />
      <AboutBelowFooter />
    </div>
  );
};
export default About;
