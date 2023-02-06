import { Label, Input, Select, Title } from "./styled";

const Field = ({
  title,
  placeholder,
  amount,
  onChangeAmount,
  currencyRate,
  onChangeCurrencyRate,
  currencyOptions
}) => (
  <Label>
    <Title>{title}</Title>
    <Input
      type="number"
      placeholder={placeholder}
      value={amount}
      onChange={onChangeAmount}
    />
    <Select value={currencyRate} onChange={onChangeCurrencyRate}>
      {Object.keys(currencyOptions).map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  </Label>
);
    
export default Field;
