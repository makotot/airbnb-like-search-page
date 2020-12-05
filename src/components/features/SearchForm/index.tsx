import React from "react";
import { DestinationField } from "./DestinationField";
import { FieldWrapper } from "./FieldWrapper";
import { FormHeader } from "./FormHeader";
import { SimpleHeader } from "./SimpleHeader";
import { usePresenter } from "./usePresenter";

export const SearchForm: React.FC = () => {
  const { handleSubmit, destination } = usePresenter();

  return (
    <form onSubmit={handleSubmit}>
      <SimpleHeader />
      <FormHeader />

      <FieldWrapper isVisible={destination.isFieldVisible}>
        <DestinationField />
      </FieldWrapper>
    </form>
  );
};
