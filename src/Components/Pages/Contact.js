import React from "react";
import Navbar from "../Navbar";
import "../Pages/contact.css";
import Footer from "../Footer";
import BelowFooter from "../BelowFooter";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-karki">
        <h1>CONTACT US</h1>
        <div className="contact-karki1">
          <div>
            <i className="fa-solid fa-map-location-dot"></i>
            <h5>OFFICE</h5>
            <p>
              2nd Floor, Central Business Park Thapathali Road, 44600,
              <br />
              Kathmandu, Nepal.
            </p>
          </div>
          <div>
            <i className="fa-solid fa-mobile"></i>
            <h5>PHONE</h5>
            <p>+977 9846132170</p>
          </div>
          <div>
            <i className="fa-solid fa-envelope-open-text"></i>
            <h5>EMAIL</h5>
            <p>info@neupanelegal.com</p>
          </div>
        </div>
      </div>
      <Footer />
      <BelowFooter />
    </div>
  );
};
export default Contact;
