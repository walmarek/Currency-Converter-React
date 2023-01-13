import { useEffect, useState } from "react";
import "./style.css";

const TimeAndDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatDate = () =>
    date.toLocaleString("en-EN", {
      weekday: "long",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  return <div className="date">{formatDate(date)}</div>;
};

export default TimeAndDate;
