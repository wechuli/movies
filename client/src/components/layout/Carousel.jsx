import React from "react";
import Slider from "react-slick";
import one from "../../images/one.jpg";
import two from "../../images/two.jpg";
import three from "../../images/three.jpg";
import four from "../../images/four.jpg";
import five from "../../images/five.jpg";
import six from "../../images/six.jpg";
import seven from "../../images/seven.jpg";


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{ overflow: "hidden", height: `60vh`, width:'100vw', background: "lightpink" }}
    >
      <Slider {...settings}>
        <div
          className="carrousel_image"
          style={{ background: `url(${one})`, height: "inherit" }}
        >
          <img src={one} width="100%" alt="" />
        </div>
        <div
          className="carrousel_image"
          style={{ background: `url(${two})`, height: "inherit" }}
        >
          <img src={two} width="100%" alt="" />
        </div>
        <div
          className="carrousel_image"
          style={{ background: `url(${three})`, height: "inherit" }}
        >
          <img src={three} width="100%" alt="" />
        </div>

        <div
          className="carrousel_image"
          style={{ background: `url(${four})`, height: "inherit" }}
        >
          <img src={four} width="100%" alt="" />
        </div>

        <div
          className="carrousel_image"
          style={{ background: `url(${five})`, height: "inherit" }}
        >
          <img src={five} width="100%" alt="" />
        </div>

        <div
          className="carrousel_image"
          style={{ background: `url(${six})`, height: "inherit" }}
        >
          <img src={six} width="100%" alt="" />
        </div>

        <div
          className="carrousel_image"
          style={{ background: `url(${seven})`, height: "inherit" }}
        >
          <img src={seven} width="100%" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
