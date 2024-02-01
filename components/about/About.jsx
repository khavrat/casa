import texts from "../../data/texts.json";
import { Container } from "../reusableComponents/container/Container";
import { Detection } from "./detection/Detection";
import { StepsLines } from "./steps/StepsLines";
import { LinkToContacts } from "../reusableComponents/linkToContacts/LinkToContacts";
import { Section, Title, Wrap } from "./About.styled";

export const About = () => {
  return (
    <Section>
      <Container>
        <Title>{texts.about.title}</Title>
        <Wrap>
          <Detection />
          <StepsLines />
        </Wrap>
        <LinkToContacts
          title={texts.links.inAbout}
        />
      </Container>
    </Section>
  );
};
