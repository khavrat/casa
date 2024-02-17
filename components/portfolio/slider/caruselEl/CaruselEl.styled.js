import styled from "@emotion/styled";

export const ArrowsContainer = styled.div`
  &.container {
    position: relative;
    width: 144px;
  }
`;

export const CustomPrevArrow = styled.button`
  display: inline-block;
  background-color: var(--bg-color);
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  border: 1px solid var(--primary-color);
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  top: -62px;
  right: 80px;
  left: auto;

  transition: all var(--transition-duration) var(--timing-function);

  &:hover,
  :focus {
    border: 1px solid var(--anjouPear-color);
    background-repeat: no-repeat;
    background-position: center center;

    svg path {
      stroke: var(--anjouPear-color);
      transition: stroke 0.3s ease;
    }
  }

  @media screen and (min-width: 768px) {
    right: 92px;
  }

  @media screen and (min-width: 1280px) {
    width: 64px;
    height: 64px;
    top: -160px;
    right: 134px;
  }
`;

export const CustomNextArrow = styled.button`
  display: inline-block;
  background-color: var(--bg-color);
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  border: 1px solid var(--primary-color);
  background-repeat: no-repeat;
  background-position: center center;
  transform: rotate(180deg);
  position: absolute;
  top: -94px;
  right: 0;

  transition: all var(--transition-duration) var(--timing-function);

  &:hover,
  :focus {
    border: 1px solid var(--anjouPear-color);
    background-repeat: no-repeat;
    background-position: center center;

    svg path {
      stroke: var(--anjouPear-color);
      transition: stroke 0.3s ease;
    }
  }

  @media screen and (min-width: 768px) {
    right: 12px;
  }
  @media screen and (min-width: 1280px) {
    width: 64px;
    height: 64px;
    top: -200px;
    right: 24px;
  }
`;


// counter
export const CounterContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin: 63px 0 19px;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 40px;
    right: 280px;
  }

  @media screen and (min-width: 1280px) {
    top: 60px;
    right: 380px;
  }

  @media screen and (min-width: 1440px) {
    top: 60px;
    right: 450px;
  }
`;

export const Counter = styled.div`
  color: var(--anjouPear-color);
  font-size: var(--textLg-fontSize);
  line-height: 1.2;
  letter-spacing: -1.12px;
`;

export const ActiveCount = styled.span`
  display: inline-block;
  width: 30px;
  color: var(--primary-color);
  font-size: var(--textLg-fontSize);
  line-height: 1.2;
  letter-spacing: -1.12px;
`;
