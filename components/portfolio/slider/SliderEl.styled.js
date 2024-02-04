import styled from "@emotion/styled";

export const Box = styled.div`
  max-width: 560px;
  height: 540px;
  margin: 0 auto;
`;

export const Slider = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  width: 100%;
`;

export const SpanBefore = styled.span`
  position: absolute;
  z-index: 10;
  font-size: 16px;
  border-radius: 4px;
  padding: 6px 12px;
  top: 88%;
  left: 18px;
  background-color: var(--blurBg-color);
  backdrop-filter: blur(10px);
  cursor: pointer;
`;

export const SpanAfter = styled.span`
  position: absolute;
  font-size: 16px;
  border-radius: 4px;
  padding: 6px 12px;
  top: 88%;
  right: 18px;
  background-color: var(--blurBg-color);
  backdrop-filter: blur(10px);
  cursor: pointer;
`;

export const Before = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
  width: 50%;
  z-index: 1;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 3px;
    height: 100%;
    background-color: var(--bg-color);
    cursor: pointer;
    z-index: 10;
  }

  > img {
    width: ${(props) => props.children?.props?.width}px;
    height: 540px;
    display: block;
    object-fit: cover;
    object-position: left top;
  }
`;

export const After = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;