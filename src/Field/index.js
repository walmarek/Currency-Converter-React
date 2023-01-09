import "./style.css";
import options from "../Options"


const Field = ({
  title,
  placeholder,
  amount,
  onChangeAmount,
  currencyRate,
  onChangeCurrencyRate,
}) => 
  <label>
    <div className="field__body">
      <span className="field__labelText">{title}</span>
      <input
        className="field__input"
        placeholder={placeholder}
        value={amount}
        onChange={onChangeAmount}
      />
      <select
        value={currencyRate}
        onChange={onChangeCurrencyRate}
        className="field__select--currency"
      >
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  </label>;


export default Field;
