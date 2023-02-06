import { useState, useEffect } from "react";

const BASE_URL =
  "https://api.exchangerate.host/latest?base=PLN&symbols=PLN,EUR,USD,GBP,CHF,CZK,HRK,JPY,RSD,AUD";

const useCurrencyOptions = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setCurrencyOptions(data.rates);
        }, 1200);
      })
      .catch((error) => error);
  }, []);

  return currencyOptions;
};

export default useCurrencyOptions;
