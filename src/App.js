import { useState } from "react";
import ConvertButton from "./ConvertButton";
import Field from "./Field";
import ConverterRow from "./ConverterRow";
import Form from "./Form";
import Section from "./Section";
import options from "./Options";
import TimeAndDate from "./TimeAndDate";
import { Main } from "./styled";

const initialToCurrencyRate = () => {
  return options[0].value;
};

function App() {
  const [fromCurrencyRate, setFromCurrencyRate] = useState(() => {
    return options[2].value;
  });

  const [toCurrencyRate, setToCurrencyRate] = useState(() =>
    initialToCurrencyRate()
  );
  const [result, setResult] = useState("");
  const [amount, setAmount] = useState("");

  const calculateResult = () => (amount * fromCurrencyRate) / toCurrencyRate;

  const onFormSubmit = (event) => {
    event.preventDefault();

    const result = calculateResult();
    setResult(result.toFixed(2));
  };

  return (
    <Main>
      <TimeAndDate />
      <Form
        onFormSubmit={onFormSubmit}
        body={
          <ConverterRow
            input={
              <Field
                title="From:"
                placeholder="Enter amount"
                amount={amount}
                currencyRate={fromCurrencyRate}
                onChangeAmount={(e) => setAmount(e.target.value)}
                onChangeCurrencyRate={(e) =>
                  setFromCurrencyRate(e.target.value)
                }
              />
            }
            output={
              <Field
                title="To:"
                placeholder="Result"
                amount={result}
                currencyRate={toCurrencyRate}
                onChangeAmount={(e) => setResult(e.target.value)}
                onChangeCurrencyRate={(e) => setToCurrencyRate(e.target.value)}
              />
            }
            button={<ConvertButton />}
          />
        }
      />
      <Section />
    </Main>
  );
}

export default App;
