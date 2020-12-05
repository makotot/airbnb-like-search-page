import React from "react";
import { FormHeader } from "./FormHeader";
import { SimpleHeader } from "./SimpleHeader";

export const SearchForm: React.FC = () => {
  const handleSubmit = () => {
    console.log("submit");
  };
  return (
    <form onSubmit={handleSubmit}>
      <SimpleHeader />
      <FormHeader />
    </form>
  );
};
