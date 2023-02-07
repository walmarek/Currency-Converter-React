import { useState } from "react";
import ConvertButton from "./ConvertButton";
import Field from "./Field";
import ConverterRow from "./ConverterRow";
import Form from "./Form";
import Footer from "./Footer";
import TimeAndDate from "./TimeAndDate";
import { Main } from "./styled";
import useCurrencyOptions from "./useCurrencyOptions";

function App() {
  const [result, setResult] = useState("");
  const [amount, setAmount] = useState("");
  const [fromCurrencyRate, setFromCurrencyRate] = useState("PLN");
  const [toCurrencyRate, setToCurrencyRate] = useState("EUR");
  const {currencyOptions} = useCurrencyOptions();

  const calculateResult = () =>
    (amount * currencyOptions[toCurrencyRate]) /
    currencyOptions[fromCurrencyRate];

  const onFormSubmit = (event) => {
    event.preventDefault();

    const result = calculateResult();
    setResult(result.toFixed(2));
  };

  return (
    <Main>
      <TimeAndDate />
      <Form
        onSubmit={onFormSubmit}
        body={
          <ConverterRow
            input={
              <Field
                title="From:"
                placeholder="Enter amount"
                amount={amount}
                currencyOptions={currencyOptions}
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
                currencyOptions={currencyOptions}
                currencyRate={toCurrencyRate}
                onChangeAmount={(e) => setResult(e.target.value)}
                onChangeCurrencyRate={(e) => setToCurrencyRate(e.target.value)}
              />
            }
            button={<ConvertButton />}
          />
        }
      />
      <Footer />
    </Main>
  );
}

export default App;
