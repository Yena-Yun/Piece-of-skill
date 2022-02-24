import React, { useMemo } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imgUrl = require('./image/temp.jpg');

const items = [
  { id: 1, url: imgUrl },
  { id: 2, url: imgUrl },
  { id: 3, url: imgUrl },
  { id: 4, url: imgUrl },
  { id: 5, url: imgUrl },
  { id: 6, url: imgUrl },
  { id: 7, url: imgUrl },
  { id: 8, url: imgUrl },
  { id: 9, url: imgUrl },
  { id: 10, url: imgUrl },
];

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  
  return (
    <SlideWrapper>
      <h3>Single Item</h3>
      <StyledSlider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </StyledSlider>
    </SlideWrapper>
  );
};

const SlideWrapper = styled.section`
  position: relative;
  padding: 40px 30px;
  background: lightgrey;

  & button {
    line-height: 1.5;
    color: black;
  }
`;

const Container = styled.div`
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
    border: 1px solid black;
  }
`;

const ImageContainer = styled.div`
  margin: 0 16px;
  width: 500px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export default SimpleSlider;
