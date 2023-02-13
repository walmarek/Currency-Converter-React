import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL =
  "https://api.exchangerate.host/latest?base=PLN&symbols=PLN,EUR,USD,GBP,CHF,CZK,HRK,JPY,RSD,AUD";

const useCurrencyOptions = () => {
  const [currencyData, setCurrencyData] = useState({
    state: "loading",
  });

useEffect(() => {
  axios
  .get(BASE_URL)
  .then((response) => {
    setTimeout(() => {
      setCurrencyData({
        rates: response.data.rates,
        date: response.data.dete,
        state: "success",
      });
    }, 1200)
  })
  .catch(() => {
    setCurrencyData({
      state: "error",
    });
  });
}, []);

// *** async/await used...

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(BASE_URL);
  //       if (!response.ok) {
  //         throw new Error(response.statusText);
  //       }
  //       const { rates, date } = await response.json();

  //       setCurrencyData({
  //         state: "success",
  //         rates,
  //         date,
  //       });
  //     } catch {
  //       setCurrencyData({
  //         state: "error",
  //       });
  //     }
  //   };
  //   setTimeout(fetchData, 1000);
  // }, []);

  // *** fetch used...

   // useEffect(() => {
  //   setTimeout(() => {
  //     fetch(BASE_URL)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(response.statusText);
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setCurrencyData({
  //           rates: data.rates,
  //           date: data.date,
  //           state: "success",
  //         });
  //       })
  //       .catch(() => {
  //         setCurrencyData({
  //           state: "error",
  //         });
  //       });
  //   }, 1200);
  // }, []);

  // useEffect(() => {
  //   const fetchData = () => {
  //     fetch(BASE_URL)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(response.statusText);
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setCurrencyData({
  //           rates: data.rates,
  //           date: data.dete,
  //           state: "success",
  //         });
  //       })
  //       .catch(() => {
  //         setCurrencyData({
  //           state: "error",
  //         });
  //       });
  //   };
  //   setTimeout(fetchData, 1200);
  // }, []);

  return currencyData;
};

export default useCurrencyOptions;
