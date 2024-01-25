import styled from "@emotion/styled";

export const Content = styled.div`
  margin-right: auto;
  margin-left: auto;
  position: relative;

  @media (min-width: 360px) and (max-width: 479px) {
    width: 100%;
    padding: 0 20px;
  }

  @media (min-width: 480px) {
    width: 480px;
    padding: 0 20px;
  }

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 30px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 0 100px;
  }
`;
