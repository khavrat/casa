import styled from "@emotion/styled";

export const Link = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  font-size: var(--textLg-fontSize);
  font-weight: var(--semibold-fontWeight);
  line-height: 1.39;
  letter-spacing: 0.9px;
  transition: all var(--transition-duration) var(--timing-function);

  &:hover {
    > svg {
      transform: scaleY(1.25);
      transform-origin: center top;
    }
    > span {
      &:before {
        width: 100%;
      }
    }
  }
`;

    //   ${({ rotate }) =>
    //     rotate === "-90"
    //       ? "transform: scaleX(1.25); transform-origin: center left"
    //       : "transform: scaleY(1.25); transform-origin: center top"};



export const Span = styled.span`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--primary-color);

    transition: width var(--transition-duration) var(--timing-function);
  }
`;
