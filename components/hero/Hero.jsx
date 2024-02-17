import { useLayoutEffect, useState } from "react";
import { HeroImage, HeroBg } from "./HeroImage";
import { Rollup } from "./Rollup";
import { Section } from "./Hero.styled";

export const Hero = () => {
  const [windowWidth, setWindowWidth] = useState();

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Section>
      {windowWidth >= 768 ? <HeroImage /> : <HeroBg/>}
      <Rollup />
    </Section>
  );
};
