import { useState, useLayoutEffect } from "react";
import texts from "../../data/texts.json";
import { StarEl } from "../reusableComponents/starElement/StarElement";
import { Wrap, Text, RollupContainer, TagLine } from "./Rollup.styled";

export const Rollup = () => {
  const [windowWidth, setWindowWidth] = useState(null);

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
    <Wrap>
      <Text>{texts.hero.text}</Text>
      <RollupContainer data-content={texts.hero.title}>
        {windowWidth >= 768 ? (
          <>
            <StarEl /> <StarEl /> <StarEl /> <StarEl /> <StarEl /> <StarEl />{" "}
            <StarEl />
          </>
        ) : (
          <>
            <StarEl /> <StarEl /> <StarEl /> <StarEl /> <StarEl />
          </>
        )}
      </RollupContainer>
      <TagLine>{texts.hero.tagline}</TagLine>
    </Wrap>
  );
};
