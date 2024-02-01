import styled from "@emotion/styled";

export const HeaderEl = styled.header`
  position: fixed;
  overflow: hidden;
  top: 0;
  z-index: 2;
  width: 100%;
  background-color: var(--transparent-color);
  padding: 24px 0;
  transition: backdrop-filter var(--transition-duration) var(--timing-function);

  &.scrolled {
    backdrop-filter: blur(10px);
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;

  @media screen and (min-width: 1280px) {
    gap: 126px;
  }
`;
