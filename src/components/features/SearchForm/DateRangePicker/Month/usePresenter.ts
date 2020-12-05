import { CalendarYearMonth } from "../CalendarYearMonth";
import { CalendarDate } from "../CalendarDate";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../state/store";
import { DateRange } from "../DateRange";
import { DateStatus } from "../types";

export const usePresenter = ({ startingDate }: { startingDate: Date }) => {
  const calendarYearMonth = CalendarYearMonth.create(startingDate);
  const monthDays = calendarYearMonth.totalDays;
  const { dateRange } = useSelector((state: RootState) => state.searchForm);
  const getDateStatus = ({
    start,
    end,
    calendarDate,
  }: {
    start: string;
    end: string;
    calendarDate: CalendarDate;
  }): DateStatus | undefined => {
    if (!start || !end) {
      return undefined;
    }
    if (start === calendarDate.dashed || end === calendarDate.dashed) {
      return "selected";
    }
    if (DateRange.create({ start, end }).isDuring(calendarDate.date)) {
      return "during";
    }

    return undefined;
  };

  return {
    calendarYearMonth,
    monthDays,
    dateRange,
    getDateStatus,
  };
};
