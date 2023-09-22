import React from "react";
import Navbar from "../Navbar";
import Slider from "../Slider/Slider";
import Cover from "../Cover";
import Cover1 from "../Cover1";
import "./home.css";
import Footer from "../Footer";
import BelowFooter from "../BelowFooter";
import TextSLider from "../TextSlider";
import ImageContainer from "../ImageContainer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Cover />
      <Cover1 />
      <ImageContainer />
      {/* <div className="appointment">
        <h2>A HIGHLY REGARDED PRACTICE</h2>
        <p>
          We are ranked as one of the top law firms in Nepal by legal
          publications. They have recognized us for "excellent knowledge and
          practice experience of business law in Nepal and Nepali legal
          practicalities", "extensive expertise in handling complex and
          high-value mandates", "business-focused and timely advice” and "highly
          recommended by both international clients and law firms."
        </p>
        <div className="appointment-btn">
          <a href="/signup">LEARN MORE</a>
        </div>
      </div> */}
      <TextSLider />
      <Footer />
      <BelowFooter />
    </div>
  );
};
export default Home;
