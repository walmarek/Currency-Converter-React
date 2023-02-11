import { useState, useEffect } from "react";

const BASE_URL =
  "https://api.exchangerate.host/latest?base=PLN&symbols=PLN,EUR,USD,GBP,CHF,CZK,HRK,JPY,RSD,AUD";

const useCurrencyOptions = () => {
  const [currencyData, setCurrencyData] = useState({
    state: "loading",
  });

  useEffect(() => {
    setTimeout(() => {
      fetch(BASE_URL)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          setCurrencyData({
            rates: data.rates,
            date: data.date,
            state: "success",
          });
        })
        .catch(() => {
          setCurrencyData({
            state: "error",
          });
        });
    }, 1200);
  }, []);

  return currencyData;
};

export default useCurrencyOptions;
