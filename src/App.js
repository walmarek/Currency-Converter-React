import { useState } from "react";
import ConvertButton from "./ConvertButton";
import Field from "./Field";
import Form from "./Form";
import Footer from "./Footer";
import TimeAndDate from "./TimeAndDate";
import { Main } from "./styled";
import useCurrencyOptions from "./CurrencyOptions/useCurrencyOptions";

function App() {
  const [result, setResult] = useState("");
  const [amount, setAmount] = useState("");
  const [fromCurrencyRate, setFromCurrencyRate] = useState("PLN");
  const [toCurrencyRate, setToCurrencyRate] = useState("EUR");
  const currencyData = useCurrencyOptions();

  const calculateResult = () =>
    (amount * currencyData.rates[toCurrencyRate]) /
    currencyData.rates[fromCurrencyRate];

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
        input={
          <Field
            title="From:"
            placeholder="Enter amount"
            amount={amount}
            currencyData={currencyData}
            currencyRate={fromCurrencyRate}
            onChangeAmount={(e) => setAmount(e.target.value)}
            onChangeCurrencyRate={(e) => setFromCurrencyRate(e.target.value)}
          />
        }
        output={
          <Field
            title="To:"
            placeholder="Result"
            amount={result}
            currencyData={currencyData}
            currencyRate={toCurrencyRate}
            onChangeAmount={(e) => setResult(e.target.value)}
            onChangeCurrencyRate={(e) => setToCurrencyRate(e.target.value)}
          />
        }
        button={<ConvertButton />}
      />
      <Footer />
    </Main>
  );
}

export default App;
