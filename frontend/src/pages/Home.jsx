import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 20px; /* Add margin between rows */
`;

const Home = () => {
  // Settings for react-slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of cards to show at a time
    slidesToScroll: 1, // Change to scroll one card at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, // Adjust for responsiveness
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, // Adjust for responsiveness
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, // Adjust for responsiveness
        },
      },
    ],
  };

  return (
    <Container>
      <CarouselContainer>
        <Slider {...settings}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </CarouselContainer>
      <CarouselContainer>
        <Slider {...settings}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </CarouselContainer>
    </Container>
  );
};

export default Home;