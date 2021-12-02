import React from "react";
import Slider from "react-slick";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderOne() {
  var settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  };
  return (
    <div className="container">
      <h1>Hello</h1>
      <Slider {...settings}>
        <div>
          <img
            className="photo"
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
          />
        </div>
        <div>
          <img
            className="photo"
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
          />
        </div>
        <div>
          <img
            className="photo"
            src="https://previews.123rf.com/images/belchonock/belchonock1906/belchonock190603948/124397191-stylish-modern-headphones-on-color-background-flat-lay.jpg"
          />
        </div>
        <div>
          <img
            className="photo"
            src="https://st2.depositphotos.com/3235547/8002/i/950/depositphotos_80020876-stock-photo-music-headphones-gold-ribbon-and.jpg"
          />
        </div>
      </Slider>
    </div>
  );
}
