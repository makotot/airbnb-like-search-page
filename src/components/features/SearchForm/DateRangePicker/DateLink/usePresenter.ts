import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CalendarDate } from "../CalendarDate";
import { updateDateRange } from "./utils";
import { searchFormSlice } from "../../searchFromSlice";
import { RootState } from "../../../../../state/store";

const createNewDateRange = ({
  current,
  value,
}: {
  current: { start: string; end: string };
  value: string;
}) => {
  const dateRangeUpdater = updateDateRange({
    start: current.start,
    end: current.end,
    dateValue: value,
  });
  const start = CalendarDate.create(dateRangeUpdater.start).dashed;
  const end = CalendarDate.create(dateRangeUpdater.end).dashed;

  return {
    start,
    end,
  };
};

export const usePresenter = ({ day }: { day: Date }) => {
  const { dateRange } = useSelector((state: RootState) => state.searchForm);
  const dispatch = useDispatch();
  const handleSelectDate = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    if (!(e.target instanceof HTMLAnchorElement)) {
      return;
    }
    dispatch(
      searchFormSlice.actions.setDateRange({
        ...createNewDateRange({
          current: { start: dateRange.value.start, end: dateRange.value.end },
          value: e.target.dataset.calendarDate,
        }),
      })
    );
  };
  const calendarDate = CalendarDate.create(day);

  return {
    handleSelectDate,
    calendarDate,
  };
};
