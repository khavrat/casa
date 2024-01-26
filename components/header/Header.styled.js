import styled from "@emotion/styled";

export const HeaderEl = styled.header`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  background-color: var(--bg-color);
  padding: 24px 0;

  &.scrolled {
    background-color: var(--wight-color);
  }
`;

export const Wrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;`

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

