import texts from "../../data/texts.json";
import { StarEl } from "./StarElement";
import { Wrap, Text, RollupContainer, TagLine } from "./Rollup.styled";

export const Rollup = () => {
  return (
    <Wrap>
      <Text>{texts.hero.text}</Text>
      <RollupContainer data-content={texts.hero.title}>
        <StarEl /> <StarEl /> <StarEl /> <StarEl /> <StarEl /> <StarEl />{" "}
        <StarEl />
      </RollupContainer>
      <TagLine>{texts.hero.tagline}</TagLine>
    </Wrap>
  );
};
