import { useState, useEffect, useRef } from "react";
import texts from "../../../../data/texts.json";
import { BeforeImage, AfterImage } from "../sliderData/SliderImage";
import {
  Box,
  Slider,
  SpanBefore,
  SpanAfter,
  Before,
  After,
} from "./SliderEl.styled";

export const SliderEl = ({ item }) => {
  const sliderRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [widthImg, setWidthImg] = useState(0);
  const [mouseLeave, setMouseLeave] = useState(false);

  // useEffect(() => {
  //   if (sliderRef.current) {
  //     setWidthImg(sliderRef.current.offsetWidth);
  //   }
  // }, []);

  const handleMouseMove = (e) => {
    setMouseLeave(false);
    setMousePosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const handleMouseLeave = () => {
    setMouseLeave((prev) => !prev);
  };

  return (
    <Box onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <Slider id="slider" ref={sliderRef}>
        <Before
          id="before"
          style={
            !mouseLeave
              ? { width: mousePosition.x + "px" }
              : { width: 50 + "%", transition: 0.3 + "s" }
          }
        >
          <BeforeImage item={item.beforeImg} width={560} height={540} />
          <SpanBefore>{texts.portfolio.slider.before}</SpanBefore>
        </Before>

        <After id="after">
          <AfterImage item={item.afterImg} width={560} height={540} />
          <SpanAfter>{texts.portfolio.slider.after}</SpanAfter>
        </After>
      </Slider>
    </Box>
  );
};
