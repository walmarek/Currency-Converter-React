import { Footer, Div } from "./styled";

const Section = () => {
  return (
    <Footer>
      <Div>
        Rates updated on 31/12/2022&emsp;
        <Div
          as="a"
          href="https://www.nbp.pl/home.aspx?f=/kursy/kursya.html"
          title="Avarage currency exchange rates NBP"
          alt="NBP website link exchange rates"
        >
          Check avarage exchange rates NBP - <strong>link</strong>
        </Div>
      </Div>
    </Footer>
  );
};

export default Section;
