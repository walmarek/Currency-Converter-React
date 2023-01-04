import { useState } from "react";
import Button from "./Button";
import Label from "./Label";
import Fieldset from "./Fieldset";
import Form from "./Form";
import Section from "./Section";

function App() {
  const [fromCurrencyRate, setFromCurrencyRate] = useState("4.685");
  const [toCurrencyRate, setToCurrencyRate] = useState("1");
  const [result, setResult] = useState("");
  const [amount, setAmount] = useState("");

  const calculateResult = () => {
    return (amount * fromCurrencyRate) / toCurrencyRate;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setResult(calculateResult().toFixed(2));
  };

  return (
    <div className="container">
      <Form
        onFormSubmit={onFormSubmit}
        body={
          <Fieldset
            input={
              <Label
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
              <Label
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
