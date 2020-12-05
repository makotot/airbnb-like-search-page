import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFormVisible: false,
  destination: {
    isFieldVisible: false,
    value: "",
  },
  date: {
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
  reducers: {},
});
