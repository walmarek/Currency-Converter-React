import { useState, useEffect } from "react";

const BASE_URL =
  "https://api.exchangerate.host/latest?base=PLN&symbols=PLN,EUR,USD,GBP,CHF,CZK,HRK,JPY,RSD,AUD";

const useCurrencyOptions = () => {
  const [currencyOptions, setCurrencyOptions] = useState("");
  const [date, setDate] = useState();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    setTimeout(() => {
      fetch(BASE_URL)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then((data) => {
          setCurrencyOptions(data.rates);
          setStatus("succes");
          setDate(data.date);
        })
        .catch((error) => {
          console.error(`Could not get file: ${error}`);
          setStatus("error");
        });
    }, 1200);
  }, []);

  return {
    currencyOptions,
    status,
    date,
  };
};

export default useCurrencyOptions;
