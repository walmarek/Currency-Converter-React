import "./style.css";

const options = [
  { id: "1", value: "1", name: "PLN" },
  { id: "2", value: "4.435", name: "USD" },
  { id: "3", value: "4.685", name: "EUR" },
  { id: "4", value: "5.432", name: "GBP" },
  { id: "5", value: "4.747", name: "CHF" },
];

const Label = ({
  title,
  placeholder,
  amount,
  onChangeAmount,
  currencyRate,
  onChangeCurrencyRate,
}) => {
  return (
    <label>
      <div className="form__body">
        <span className="form__labelText">{title}</span>
        <input
          className="form__input"
          placeholder={placeholder}
          value={amount}
          onChange={onChangeAmount}
        />
        <select
          value={currencyRate}
          onChange={onChangeCurrencyRate}
          className="form__select--currency"
        >
          {options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </label>
  );
};

export default Label;
