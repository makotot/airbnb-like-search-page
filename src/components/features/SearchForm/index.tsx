import React from "react";
import { DateRangePicker } from "./DateRangePicker";
import { DestinationField } from "./DestinationField";
import { FieldWrapper } from "./FieldWrapper";
import { FormHeader } from "./FormHeader";
import { PeopleField } from "./PeopleField";
import { SimpleHeader } from "./SimpleHeader";
import { usePresenter } from "./usePresenter";

export const SearchForm: React.FC<{
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}> = ({ handleSubmit }) => {
  const { destination, dateRange, people } = usePresenter();

  return (
    <form onSubmit={handleSubmit}>
      <SimpleHeader />
      <FormHeader />

      <FieldWrapper isVisible={destination.isFieldVisible}>
        <DestinationField />
      </FieldWrapper>
      <FieldWrapper isVisible={dateRange.isFieldVisible}>
        <DateRangePicker />
      </FieldWrapper>
      <FieldWrapper isVisible={people.isFieldVisible}>
        <PeopleField />
      </FieldWrapper>
    </form>
  );
};
