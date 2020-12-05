import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { Room } from "../../../types";

const roomsAdapter = createEntityAdapter<Room>();
const initialState = roomsAdapter.getInitialState<{
  loading: "idle" | "pending" | "end";
  error: boolean;
  total: number;
}>({
  loading: "idle",
  error: false,
  total: 0,
});

export const searchResultSlice = createSlice({
  name: "searchResult",
  initialState,
  reducers: {},
});
