import styled from "@emotion/styled";

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;

  transition: transform var(--transition-duration) var(--timing-function);

  &:hover {
    > p {
      &:before {
        width: 100%;
      }
    }
  }
`;

export const Text = styled.p`
  color: var(--primary-color);
  font-family: "Shantell Sans";
  font-size: var(--logoLg-fontSize);
  font-weight: var(--semibold-fontWeight);
  line-height: 1.75;

  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 6px;
    left: 0;
    background-color: var(--primary-color);

    transition: width var(--transition-duration) var(--timing-function);
  }
`;
