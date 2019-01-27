import React from "react";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">Movies</div>
      </div>
    </div>
  );
};

export default Hero;
