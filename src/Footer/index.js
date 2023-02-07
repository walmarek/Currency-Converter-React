import useCurrencyOptions from "../useCurrencyOptions";
import { Container, Box } from "./styled";

const Footer = () => {
  const { date } = useCurrencyOptions();
  return (
    <Container>
      <Box>
        <Box>
          Exchange rates updated: {`${date}`} from European Central Bank.
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
