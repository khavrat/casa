import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderData } from "../../../../data/sliderData";
import { SliderEl } from "../sliderEl/SliderEl";
import { ArrowEl } from "../../../reusableComponents/arrowElement/ArrowElement";
import {
  ArrowsContainer,
  CustomPrevArrow,
  CustomNextArrow,
  Card,
  Location,
  Title,
  WrapperTop,
  WrapperBottom,
  Text,
  CounterContainer,
  Counter,
  ActiveCount,
} from "./CaruselEl.styled";

export const CaruselEl = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const settings = {
    appendArrows: ArrowsContainer,
    mobileFirst: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    draggable: true,
    swipe: true,
    touchThreshold: 10,
    touchMove: true,
    weitForAnimate: false,
    beforeChange: (current, next) => setActiveSlide(next),
    afterChange: (current) => {
      setActiveSlide(current);
    },
    nextArrow: (
      <CustomNextArrow type="button" ariaLabel="to the next slide">
        <ArrowEl />
      </CustomNextArrow>
    ),
    prevArrow: (
      <CustomPrevArrow type="button" ariaLabel="to the previous slide">
        <ArrowEl />
      </CustomPrevArrow>
    ),

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <CounterContainer>
        <Counter>
          <ActiveCount>{`0${activeSlide + 1}`}</ActiveCount> /
          {`0${sliderData.length}`}
        </Counter>
      </CounterContainer>
      <ArrowsContainer className="container"></ArrowsContainer>
      <Slider {...settings}>
        {sliderData.map((item) => (
          <SliderEl item={item} />
        ))}
      </Slider>
    </>
  );
};
