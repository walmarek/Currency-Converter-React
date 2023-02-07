import useCurrencyOptions from "../useCurrencyOptions";
import { Fieldset, Legend, Span } from "./styled";

const ConverterRow = ({ input, output, button }) => {
  const {status} = useCurrencyOptions("loading")

  return (
    <Fieldset>
      <Legend>Currency converter</Legend>
      { status === "loading" ? (
        <p>
Loading...
        </p>
          
      ) : status === "error" ? (
        <p>
          Ups... Something gone wrong! <br />
          Plese check your internet conection and reload!
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
  );
}

export default ConverterRow;
