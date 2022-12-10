import "./style.css";

const Input = () => (
    <input
    className="form__input"
    type="number"
    step="any"
    min="10"
    max="100000"
    minLength="2"
    required
    placeholder="Enter amount"
  />
);

export default Input;