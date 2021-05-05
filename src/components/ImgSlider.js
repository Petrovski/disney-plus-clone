import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const slides = [
    {
      src: '/images/slider-badging.jpg',
      alt: 'Disney Movie 1',
    },
    {
      src: '/images/slider-badag.jpg',
      alt: 'Disney Movie 1',
    },
    {
      src: '/images/slider-badging.jpg',
      alt: 'Disney Movie 1',
    },
    {
      src: '/images/slider-badag.jpg',
      alt: 'Disney Movie 1',
    },
  ];

  return (
    <Carousel {...settings}>
      {slides.map(slide => {
        return (
          <Wrap>
            <img src={slide.src} alt={slide.alt} />
          </Wrap>
        );
      })}
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 12px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: 0.5s;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.6);
    }
  }
`;
