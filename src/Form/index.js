import useCurrencyOptions from "../CurrencyOptions/useCurrencyOptions";
import { Fieldset, Legend, Span, Box } from "./styled";

const Form = ({ input, output, button, onSubmit }) => {
  const currencyData = useCurrencyOptions();

  return (
    <form onSubmit={onSubmit}>
      <Fieldset>
        <Legend>Currency converter</Legend>
        {currencyData.state === "loading" ? (
          <Box>Loading...</Box>
        ) : currencyData.state === "error" ? (
          <Box>
            Ups... Something gone wrong! <br />
            Please check your internet conection and reload!
          </Box>
        ) : (
          <>
            <Span>Select currency:</Span>
            {input}
            {output}
            {button}
          </>
        )}
      </Fieldset>
    </form>
  );
};

export default Form;
