import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { Room } from "../../../types";
import { API_URL } from "../../../config";

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

export const searchRooms = createAsyncThunk(
  "searchResult/searchRooms",
  async (queryParameter: string) => {
    const base = `${API_URL}rooms?`;
    const response = await axios.get(`${base}${queryParameter}`);

    return {
      data: response.data,
      total: response.headers["x-total-count"],
    };
  }
);

export const searchResultSlice = createSlice({
  name: "searchResult",
  initialState,
  reducers: {},
});
