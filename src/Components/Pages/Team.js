import React from "react";
import Hero from "../Hero";
import Navbar from "../Navbar";
import Profile from "../Profile/Profile";
import Footer from "../Footer";
import BelowFooter from "../BelowFooter";

const Team = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg="https://images.unsplash.com/photo-1634143407677-e19f75512b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1615&q=80"
        title="OUR LAWYERS"
        text="Our highly qualified and experienced team of lawyers in Nepal deliver innovative solutions to clients."
        btnText="Travel Plan"
        url="#"
        btnClass="hide"
      />
      <Profile />
      <Footer />
      <BelowFooter />
    </div>
  );
};
export default Team;
