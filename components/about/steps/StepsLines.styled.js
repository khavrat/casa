import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const fadeIn = keyframes`
0% {
    opacity: 0;
}
50% {
      opacity: 0;
}
100% {
      opacity: 1;
}`;

export const List = styled.ul`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
`;

export const Step = styled.li`
  display: inline-flex;
  align-items: center;
  margin: 10px;
  padding: 10px;
  background-color: var(--primary-color);
  border-radius: 4px;
  width: 40px;
  height: 40px;
  wight-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  transition: width 300ms ease-in-out 0s, background-color 300ms linear 200ms;

  ${(props) =>
    props.isHovered &&
    `
      background-color: tomato;
      width: 500px;
      transition: width 300ms ease-in-out 0s, background-color 100ms linear 0s;
    `}

  &:active {
    opacity: 0.9;
  }

  &:nth-of-type(1) {
    ${(props) =>
      props.isHovered &&
      `
      background-color: var(--intellectualGray-color);
    `}
  }

  &:nth-of-type(2) {
    ${(props) =>
      props.isHovered &&
      `
      background-color: var(--delft-color-color);
    `}
  }
  &:nth-of-type(3) {
    ${(props) =>
      props.isHovered &&
      `
      background-color: var(--evergreenFog-color);
    `}
  }
  &:nth-of-type(4) {
    ${(props) =>
      props.isHovered &&
      `
      background-color: var(--spicedCider-color);
    `}
  }
  &:nth-of-type(5) {
    ${(props) =>
      props.isHovered &&
      `
      background-color: var(--tempeStar-color);
    `}
  }
  &:nth-of-type(6) {
    ${(props) =>
      props.isHovered &&
      `
      background-color: var(--shodjiWight-color);
    `}
  }
  &:nth-of-type(7) {
    ${(props) =>
      props.isHovered &&
      `
      background-color: var(--worldlyGray-color);
    `}
  }
  &:nth-of-type(8) {
    ${(props) =>
      props.isHovered &&
      `
      background-color: var(--anjouPear-color);
    `}
  }

  &:after {
    content: "${(props) => props.tooltip}";
    font-size: var(--cardText-fontSize);
    text-transform: uppercase;
    margin-left: 12px;
    animation: ${fadeIn} 600ms linear forwards;
  }
`;
