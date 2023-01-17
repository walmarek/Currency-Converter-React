import { Fieldset, Legend, Span } from "./styled";

const ConverterRow = ({ input, output, button }) => (
  <Fieldset>
    <Legend>Currency converter</Legend>
    <Span>Select currency:</Span>
    {input}
    {output}
    {button}
  </Fieldset>
);

export default ConverterRow;
