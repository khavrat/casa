import styled from "@emotion/styled";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
`;

export const Item = styled.p`
  color: var(--primary-color);
  font-size: var(--textLg-fontSize);
  font-weight: var(--regular-fontWeight);
  line-height: 1.5;
`;

export const SpanItem = styled.span`
  font-weight: var(--semibold-fontWeight);
`;

