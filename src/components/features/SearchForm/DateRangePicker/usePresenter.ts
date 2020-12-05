import { addMonths } from "date-fns";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchFormSlice } from "../searchFromSlice";

export const usePresenter = () => {
  const [startingDates, incrementMonth] = useState([new Date()]);
  const handleIncrementMonth = () => {
    const nextMonthDate = addMonths(startingDates[startingDates.length - 1], 1);
    incrementMonth([...startingDates, nextMonthDate]);
  };
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(searchFormSlice.actions.hideDateRangePicker());
  };

  return {
    startingDates,
    handleIncrementMonth,
    handleClose,
  };
};
