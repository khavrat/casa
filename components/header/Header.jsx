import { useEffect, useState, useLayoutEffect } from "react";
import texts from "../../data/texts.json";
import { Logo } from "../reusableComponents/logo/Logo";
import { LinkToContacts } from "../reusableComponents/linkToContacts/LinkToContacts";
import { ButtonMenu } from "../reusableComponents/buttonMenu/ButtonMenu";
import { HeaderEl, Wrap, Div } from "./Header.styled";
import { Container } from "../reusableComponents/container/Container";
import { changedColorHeader } from "../../helpers/changedColorHeader";

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    window.addEventListener("scroll", changedColorHeader);
    return () => {
      window.removeEventListener("scroll", changedColorHeader);
    };
  }, []);

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
    <>
      <HeaderEl>
        <Container>
          <Wrap>
            <Logo width="75px" height="75px" />
            <Div>
              {windowWidth >= 768 ? (
                <LinkToContacts title={texts.links.inHeader} />
              ) : (
                ""
              )}
              <ButtonMenu width="40px" height="40px" />
            </Div>
          </Wrap>
        </Container>
      </HeaderEl>
    </>
  );
};
