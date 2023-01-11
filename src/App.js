import { useState } from "react";
import Button from "./Button";
import Field from "./Field";
import Fieldset from "./Fieldset";
import Form from "./Form";
import Section from "./Section";
import options from "./Options";

const initialToRate = () => {
  return options[0].value
}

function App() {
  const [fromCurrencyRate, setFromCurrencyRate] = useState(() => {
    return options[2].value});

  const [toCurrencyRate, setToCurrencyRate] = useState(() => initialToRate());
  const [result, setResult] = useState("");
  const [amount, setAmount] = useState("");

  const calculateResult = () => (amount * fromCurrencyRate) / toCurrencyRate;

  const onFormSubmit = (event) => {
    event.preventDefault();

    const result = calculateResult();
    setResult(result.toFixed(2));
  };

  return (
    <div className="container">
      <Form
        onFormSubmit={onFormSubmit}
        body={
          <Fieldset
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
            button={<Button />}
          />
        }
      />
      <Section />
    </div>
  );
}

export default App;
