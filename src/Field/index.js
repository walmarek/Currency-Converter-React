import { Label, Input, Select, Title } from "./styled";
import currencies from "../currencies";

const Field = ({
  title,
  placeholder,
  amount,
  onChangeAmount,
  currencyRate,
  onChangeCurrencyRate,
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
      {currencies.map((option) => (
        <option key={option.id} value={option.value}>
          {option.name}
        </option>
      ))}
    </Select>
  </Label>
);

export default Field;
