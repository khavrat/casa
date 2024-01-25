import { HeaderEl, Title } from "./Header.styled";
import { Container } from "../container/Container";

const Header = () => {
    return (
      <HeaderEl>
        <Container>
          <Title>This is the header component color red</Title>
        </Container>
      </HeaderEl>
    );
};

export default Header;
