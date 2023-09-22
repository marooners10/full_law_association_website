import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import OurWork from "../OurWork";
import Footer from "../Footer";
import BelowFooter from "../BelowFooter";
import ImageContainer from "../ImageContainer";

const PracticeArea = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg="https://images.unsplash.com/photo-1634143407677-e19f75512b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1615&q=80"
        title="OUR PRACTICE AREAS"
        text="We are specialists in business law and dispute resolution."
        btnText="Travel Plan"
        url="#"
        btnClass="hide"
      />
      <OurWork />
      <ImageContainer />
      <Footer />
      <BelowFooter />
    </div>
  );
};
export default PracticeArea;
