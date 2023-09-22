import React from "react";
import "./containerstyle.css";
import DynamicContainer from "./DynamicContainer";

const Container = () => {
  return (
    <div className="container">
      <DynamicContainer
        topic="AVIATION"
        detail="A Dental Management System (DMS) is a specialized software application designed to help dental practices and clinics efficiently manage their daily operations, patient records, appointments, billing, and overall workflow. It is a crucial tool that enhances the productivity and organization of dental professionals while improving patient care and experience."
        btnText="View More"
        url="#"
        btnClass="show"
      />
      <DynamicContainer
        topic="School Management System"
        detail="A School Management System (SMS) is a comprehensive software solution designed to streamline and improve the administrative functions of educational institutions, such as schools, colleges, and universities. This system helps automate various tasks related to student enrollment, attendance tracking, grade management, communication, and more."
        btnText="View More"
        url="#"
        btnClass="show"
      />
      <DynamicContainer
        topic="Hotel Management System"
        detail="A Hotel Management System (HMS) is a software solution designed to streamline and automate the operations and management of hotels, resorts, motels, and other accommodation businesses. It assists in handling various aspects of running a hospitality establishment efficiently, from reservations and check-ins to room assignments, billing, and guest services."
        btnText="View More"
        url="#"
        btnClass="show"
      />
      <DynamicContainer
        topic="Inventory Management System"
        detail="An Inventory Management System (IMS) is a software solution designed to efficiently and accurately oversee and control all aspects of inventory within a business. Whether it's a small retail store or a large manufacturing facility, an IMS helps organizations keep track of their stock levels, monitor inventory movements, optimize purchasing, and streamline operations."
        btnText="View More"
        url="#"
        btnClass="show"
      />
    </div>
  );
};
export default Container;
