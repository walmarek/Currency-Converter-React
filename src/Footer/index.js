import { Container, Box } from "./styled";

const Footer = () => {
  return (
    <Container>
      <Box>
        Rates updated on 31/12/2022&emsp;
        <Box
          as="a"
          href="https://www.nbp.pl/home.aspx?f=/kursy/kursya.html"
          title="Avarage currency exchange rates NBP"
          alt="NBP website link exchange rates"
        >
          Check avarage exchange rates NBP - <strong>link</strong>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
