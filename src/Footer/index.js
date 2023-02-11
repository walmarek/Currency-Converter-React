import useCurrencyOptions from "../CurrencyOptions/useCurrencyOptions";
import { Container, Box } from "./styled";

const Footer = () => {
  const currencyData = useCurrencyOptions("");
  return (
    <Container>
      <Box>
        <Box>
          Exchange rates updated: {`${currencyData.date}`} from European Central
          Bank.
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
