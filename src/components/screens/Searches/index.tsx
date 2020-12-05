import React from "react";
import { SearchForm } from "../../features/SearchForm";
import { SearchResult } from "../../features/SearchResult";
import { usePresenter } from "./usePresenter";

export const Searches: React.FC = () => {
  const { handleSubmit, queryParameter } = usePresenter();
  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      <SearchResult queryParameter={queryParameter} />
    </>
  );
};
