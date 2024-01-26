import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: var(--primary-color);
  border: none;
  padding: 10px;

  transition: all var(--transition-duration) var(--timing-function);

  &:hover {
    > div {
      transform: scaleX(1.2);
    }
  }
`;

export const Line = styled.div`
  position: relative;
  width: 100%;
  height: 3px;
  background-color: var(--wight-color);

  transition: all var(--transition-duration) var(--timing-function);

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: var(--wight-color);
  }

  &:before {
    top: 8px;
    left: 0;
  }
  &:after {
    top: -8px;
    left: 0;
  }
`;