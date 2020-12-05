import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isFormVisible: false,
  destination: {
    isFieldVisible: false,
    value: "",
  },
  dateRange: {
    isFieldVisible: false,
    value: {
      start: "",
      end: "",
    },
  },
  people: {
    isFieldVisible: false,
    value: 0,
  },
};

export const searchFormSlice = createSlice({
  name: "searchForm",
  initialState,
  reducers: {
    showForm(state) {
      state.isFormVisible = true;
    },
    hideForm(state) {
      state.isFormVisible = false;
      state.destination.isFieldVisible = false;
      state.dateRange.isFieldVisible = false;
    },
    showDestinationField(state) {
      state.destination.isFieldVisible = true;
      state.destination.value = "";
    },
    hideDestinationField(state) {
      state.destination = initialState.destination;
    },
    setDestination(state, action: PayloadAction<{ value: string }>) {
      state.destination.value = action.payload.value;
    },
    showDateRangePicker(state) {
      state.dateRange.isFieldVisible = true;
      state.dateRange.value = {
        start: undefined,
        end: undefined,
      };
    },
    hideDateRangePicker(state) {
      state.dateRange = initialState.dateRange;
    },
    setDateRange(state, action: PayloadAction<{ start: string; end: string }>) {
      state.dateRange.value = action.payload;
    },
  },
});
