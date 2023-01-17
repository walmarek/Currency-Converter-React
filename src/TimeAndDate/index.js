import { useCurrentDate } from "./useCurrentDate";
import { Div } from "./styled";

const formatDate = (date) =>
    date.toLocaleString("en-EN", {
      weekday: "long",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });


const TimeAndDate = () => {
  const date = useCurrentDate();

  return <Div>{formatDate(date)}</Div>;
};

export default TimeAndDate;
