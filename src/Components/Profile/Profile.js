import React from "react";
import "../Profile/profile.css";
import DynamicProfile from "./DynamicProfile";

const Profile = () => {
  return (
    <div className="member">
      <div className="profile">
        <h1>Our Team</h1>
        <p>
          Karki Law Associates is a leading corporate law firm in Nepal. Our key
          practice areas include arbitration, banking, corporate, construction,
          foreign investment, joint ventures, mergers and acquisitions, project
          finance, property, technology, taxation and litigation. We work with
          banks and financial institutions, multinational companies,
          international organizations, Nepal’s leading corporates and as local
          counsel to international law firms. We have a proven track record of
          providing innovative solutions in high-value, complex and cross-border
          transactions and disputes.
        </p>
      </div>
      <div className="profile-list-container">
        <DynamicProfile
          img="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
          name="Mesut Ozil"
          detail="I am the founder, chairman and chief executive officer of TanviHost"
          contact="9846132170"
          email="mailto:eeeabc@gmail.com"
          select="Contact Me"
        />

        <DynamicProfile
          img="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
          name="Mesut Ozil"
          detail="I am the founder, chairman and chief executive officer of TanviHost"
          contact="9846132170"
          email="mailto:eeeabc@gmail.com"
          select="Contact Me"
        />

        <DynamicProfile
          img="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
          name="Mesut Ozil"
          detail="I am the founder, chairman and chief executive officer of TanviHost"
          contact="9846132170"
          email="mailto:eeeabc@gmail.com"
          select="Contact Me"
        />
        <DynamicProfile
          img="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
          name="Mesut Ozil"
          detail="I am the founder, chairman and chief executive officer of TanviHost"
          contact="9846132170"
          email="mailto:cccccc@gmail.com"
          select="Contact Me"
        />
        <DynamicProfile
          img="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
          name="Mesut Ozil"
          detail="I am the founder, chairman and chief executive officer of TanviHost"
          contact="9846132170"
          email="mailto:acdeee@gmail.com"
          select="Contact Me"
        />
        <DynamicProfile
          img="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
          name="Mesut Ozil"
          detail="I am the founder, chairman and chief executive officer of TanviHost"
          contact="9846132170"
          email="mailto:abc@gmail.com"
          select="Contact Me"
        />
      </div>
    </div>
  );
};
export default Profile;
