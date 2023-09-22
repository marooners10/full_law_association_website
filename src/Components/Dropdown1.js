import React, { useState } from "react";
import "./dropdown1.css";
import { ServiceDropDown } from "./MenuItems";
import { Link } from "react-router-dom";

const Dropdown1 = () => {
  const [Dropdown1, setDropdown1] = useState(false);
  return (
    <div>
      <ul
        className={Dropdown1 ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown1(!Dropdown1)}
      >
        {ServiceDropDown.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setDropdown1(false)}
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
export default Dropdown1;
