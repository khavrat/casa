import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
`;

export const Text = styled.p`
  color: var(--primary-color);
  font-size: var(--cardText-fontSize);
  font-weight: var(--regular-fontWeight);
  line-height: 1.2;
  letter-spacing: 1.95px;
  text-transform: uppercase;
`;

export const RollupContainer = styled.h1`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 16px 60px;
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
    display: inline-flex;
    align-items: center;
    justify-content: center;
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

export const TagLine = styled.p`
  color: var(--primary-color);
  font-size: (--textLg-fontSize);
  font-weight: var(--regular-fontWeight);
  line-height: 1.56;
  letter-spacing: 0.9px;
  margin: 0 auto;
  width: 420px;
`;
