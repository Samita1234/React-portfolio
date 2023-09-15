import React from "react";
import "./service.css";
import Card from "../card/card";

const service = () => {

  return (
    <div className="service" id="service">
      <div className="awesome">
        <span style={{ color:"black"}}></span>
        <span>My Skills</span>
       
        
      </div>
      <div className="cards">
        {/* first card */}
        <div class="c-responsive">
        <Card
            
            heading={"Developer"}
            detail={" HTML, CSS, javascript, PHP integration, React"}
            details={"As a web developer at shootdart solutions pvt It, my primary responsibility is to design and develop functional and visually appealing websites that meet the client’s expectation. The websites that I build are based on HTML, CSS, javascript, php integration."}
          />
          
        </div>
        <div class="c-responsive"
          >
          <Card
            
            heading={"Design"}
            detail={" Photoshop"}
            details={"Using photoshop I have made many website design,logo,photo editing, banners etc as per the client specification or requirements."}
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
