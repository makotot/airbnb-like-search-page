import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { searchFormSlice } from "../components/features/SearchForm/searchFromSlice";
import { searchResultSlice } from "../components/features/SearchResult/searchResultSlice";

const rootReducer = combineReducers({
  searchForm: searchFormSlice.reducer,
  searchResult: searchResultSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
