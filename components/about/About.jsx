import texts from "../../data/texts.json";
import { Title } from "./About.styled";
import { StepsLines } from "./steps/StepsLines";

export const About = () => {
  return (
    <section>
      <Title>{texts.about.detection.title}</Title>
      <StepsLines />
    </section>
  );
};
