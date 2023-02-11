import usecurrencyOptions from "../CurrencyOptions/useCurrencyOptions";
import { Label, Input, Select, Title } from "./styled";

const Field = ({
  title,
  placeholder,
  amount,
  onChangeAmount,
  currencyRate,
  onChangeCurrencyRate,
}) => {
  const currencyData = usecurrencyOptions();

  return (
    <Label>
      <Title>{title}</Title>
      <Input
        type="number"
        placeholder={placeholder}
        value={amount}
        onChange={onChangeAmount}
      />
      <Select value={currencyRate} onChange={onChangeCurrencyRate}>
        {!!currencyData.rates &&
          Object.keys(currencyData.rates).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </Select>
    </Label>
  );
};

export default Field;
