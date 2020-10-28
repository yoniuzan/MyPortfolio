import React from "react";
//import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import ScrollDown from "../ScrollDown/ScrollDown";
import "./MyCarousel.css";

const MyCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src="img/carousel/slide1.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src="img/carousel/slide2.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src="img/carousel/slide3.webp"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousel;

/*
.custom-img {
  height: 100vh;
  object-fit: cover;
}
*/
