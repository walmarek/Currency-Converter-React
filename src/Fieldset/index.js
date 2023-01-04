import "./style.css";

const Fieldset = ({ input, output, button }) => (
  <fieldset className="form__fieldset">
    <legend className="form__legend">Currency converter</legend>
    <span className="form__labelText form__labelText--currency">
      Select currency:
    </span>
    {input}
    {output}
    {button}
  </fieldset>
);

export default Fieldset;
