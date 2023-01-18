import { useCurrentDate } from "./useCurrentDate";
import { Box } from "./styled";

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

  const formattedDate = formatDate;

  return <Box>{formattedDate(date)}</Box>;
};

export default TimeAndDate;
