import "./style.css";

const Fieldset = ({ input, output, button }) => (
  <fieldset className="fieldset">
    <legend className="fieldset__legend">Currency converter</legend>
    <span className="fieldset__labelText fieldset__labelText--currency">
      Select currency:
    </span>
    {input}
    {output}
    {button}
  </fieldset>
);

export default Fieldset;
