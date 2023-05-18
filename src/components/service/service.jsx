import React from "react";
import "./service.css";
import Card from "../card/card";

const service = () => {

  return (
    <div className="service" id="service">
      <div className="awesome">
        <span style={{ color:"black"}}>My Awesome</span>
        <span>Skills</span>
       
        
      </div>
      <div className="cards">
        {/* first card */}
        <div class="c-responsive">
          <Card
            
            heading={"Design"}
            detail={" Photoshop"}
            details={"Using photoshop i have made so many website design,logo, some photo editing,banner etc.Also i have done some logo editing as per client requirement for client and company."}
          />
        </div>
        <div class="c-responsive"
          >
          <Card
            
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, PHP integration"}
            details={"As a web developer at shootdart solutions pvt ltd, my primary responsibility is to design and develop functional and visually appealing websites that meet our clients. Using Html, css, javascript, php integration i have created so many projects for company and clients."}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
      <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
    </div>
  );
};

export default service;
