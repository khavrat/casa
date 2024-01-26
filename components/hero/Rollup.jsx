import texts from "../../data/texts.json";
import { StarEl } from "./StarElement";
import styled from "@emotion/styled";

const RollupContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  gap: 15px;
  padding: 16px 38px;
  min-width: 485px;
  overflow: hidden;
  cursor: pointer;
  background-color: var(--primary-color);
  transition: all 1000ms var(--timing-function);

  &:before {
    content: attr(data-content);
    color: var(--bg-color);
    font-size: var(--textLg-fontSize);
    font-weight: var(--regular-fontWeight);
    line-height: 1.5;
    display: inline-block;
    padding: 23px 30px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--primary-color);
    opacity: 0;
    transform: translateX(-100%);
    transition: all 1000ms var(--timing-function);
  }

  &:hover {
    transition: all 1000ms var(--timing-function);

    &:before {
      opacity: 1;
      transform: translateX(0);
      transition: all 1000ms var(--timing-function);
    }
  }
`;

export const Rollup = () => {
  return (
    <RollupContainer data-content={texts.hero.text}>
      <StarEl /> <StarEl /> <StarEl /> <StarEl /> <StarEl /> <StarEl />{" "}
      <StarEl />
    </RollupContainer>
  );
};
