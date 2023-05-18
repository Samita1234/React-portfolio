import React from 'react';
import './intro.css';
import samita1 from '../../img/samita1.png';
// import Vector6 from "../../img/Vector6.png";
import { Link } from "react-scroll";

function intro() {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hii! I Am</span>
                <span>Samita Sahoo</span>
                <h5>Frontend Developer with high level of experience in web designing and development, producting the Quality work</h5>
            </div>
            <Link to="contact" smooth={true} spy={true}>
            <div className="button i-button">Hire Me</div>
            </Link>
        </div>
        <div className="i-right">
        {/* <img src={Vector6} alt="" /> */}
        <img src={samita1} alt="" />
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-35rem",
          }}
        ></div>
        </div>
    </div>
  )
}

export default intro