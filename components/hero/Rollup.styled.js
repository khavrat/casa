import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 6px;

  @media screen and (min-width: 768px) {
    padding: 20px;
    top: 50%;
    left: 50%;
  }
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
  gap: 16px;
  padding: 12px 10px;
  min-width: 340px;
  max-width: 340px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  background-color: var(--primary-color);
  transition: all 1000ms var(--timing-function);

  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    gap: 20px;
    min-width: 485px;
  }

  &:before {
    content: attr(data-content);
    color: var(--bg-color);
    font-size: var(--cardText-fontSize);
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
    border-radius: 4px;
    opacity: 0;
    transform: translateX(-100%);
    transition: all 1000ms var(--timing-function);

    @media screen and (min-width: 768px) {
      font-size: var(--textLg-fontSize);
    }
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
  font-size: (--cardText-fontSize);
  font-weight: var(--regular-fontWeight);
  line-height: 1.56;
  letter-spacing: 0.9px;
  margin: 0 auto;
  // width: 420px;

  @media screen and (min-width: 768px) {
    font-size: (--textLg-fontSize);
    width: 420px;
  }
`;
