import React, { useState } from "react";
import "./dropdown.css";
import { AboutDropDown } from "./MenuItems";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [Dropdown11, setDropdown11] = useState(false);
  return (
    <div>
      <ul
        className={Dropdown11 ? "about-submenu clicked" : "about-submenu"}
        onClick={() => setDropdown11(!Dropdown11)}
      >
        {AboutDropDown.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setDropdown11(false)}
              >
                {/* making url dynamic */}
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Dropdown;
