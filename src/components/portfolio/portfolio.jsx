import React, { useContext } from "react";
import "./portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import rashmi from "../../img/rashmi.jpg";
import Autho from "../../img/autho.png";
import nissan from "../../img/nissan.png";
import gcr from "../../img/gcr.png";
const Portfolio = () => {

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color:'black'}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={rashmi} alt="" />
          <a href="https://rashmioutsourcing.in/" target="_blank" rel="noopener noreferrer">rashmioutsourcing.in</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Autho} alt="" />
          <a href="https://athouassociates.com" target="_blank" rel="noopener noreferrer">athouassociates.com</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={nissan} alt="" />
          <a href="https://nissanrealcon.com" target="_blank" rel="noopener noreferrer">nissanrealcon.com</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={gcr} alt="" />
          <a href="https://gcrphotolab.com" target="_blank" rel="noopener noreferrer">gcrphotolab.com</a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
