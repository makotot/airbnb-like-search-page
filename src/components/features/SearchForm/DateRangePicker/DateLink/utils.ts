import { isAfter } from "date-fns";
import { toDate } from "../utils";

export const updateDateRange = ({
  start,
  end,
  dateValue,
}: {
  start: string;
  end: string;
  dateValue: string;
}): {
  start: Date;
  end: Date;
} => {
  const newDate = toDate(dateValue);

  if (!start) {
    return { start: newDate, end: newDate };
  }

  const startDate = toDate(start);
  const endDate = toDate(end);

  if (!isAfter(newDate, startDate)) {
    return { start: newDate, end: newDate };
  }
  if (isAfter(newDate, endDate)) {
    return { start: startDate, end: newDate };
  }

  return { start: startDate, end: endDate };
};
