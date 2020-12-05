import React from "react";
import { SearchForm } from "../../features/SearchForm";
import { SearchResult } from "../../features/SearchResult";

export const Searches: React.FC = () => {
  return (
    <>
      <SearchForm />
      <SearchResult />
    </>
  );
};
