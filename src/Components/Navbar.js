import React, { useState } from "react";
// import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./navbar.css";
import Dropdown from "./Dropdown";
import Dropdown1 from "./Dropdown1";
import logo from "../Components/Images/logo.jpeg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [practiceDropdown, setPracticeDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About Us <i className="fas fa-caret-down" />
            </Link>
            {aboutDropdown && <Dropdown />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => setPracticeDropdown(true)}
            onMouseLeave={() => setPracticeDropdown(false)}
          >
            <Link
              to="/practice-area"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Practice Area <i className="fas fa-caret-down" />
            </Link>
            {practiceDropdown && <Dropdown1 />}
          </li>
          <li className="nav-item">
            <Link
              to="/news-and-publication"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              News & Publication
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li> */}
        </ul>
        {/* <Button /> */}
      </nav>
    </div>
  );
};

export default Navbar;
