import useCurrencyOptions from "../CurrencyOptions/useCurrencyOptions";
import { Fieldset, Legend, Span } from "./styled";

const Form = ({ input, output, button, onSubmit }) => {
  const currencyData = useCurrencyOptions();

  return (
    <form onSubmit={onSubmit}>
      <Fieldset>
        <Legend>Currency converter</Legend>
        {currencyData.state === "loading" ? (
          <p>Loading...</p>
        ) : currencyData.state === "error" ? (
          <p>
            Ups... Something gone wrong! <br />
            Please check your internet conection and reload!
          </p>
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
