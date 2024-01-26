import { Button, Line } from "./ButtonMenu.styled";

export const ButtonMenu = ({ width, height }) => {
  return (
    <Button type="button" style={{ width, height }}>
      <Line></Line>
    </Button>
  );
};
