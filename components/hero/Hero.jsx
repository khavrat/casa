import { HeroImage } from "./HeroImage";
import { Rollup } from "./Rollup";
import { Section } from "./Hero.styled";

export const Hero = () => {
  return (
    <Section>
      <HeroImage />
      <Rollup />
    </Section>
  );
};
