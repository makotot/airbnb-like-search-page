import { useNumberInput } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../state/store";
import { searchFormSlice } from "../searchFromSlice";

export const usePresenter = () => {
  const dispatch = useDispatch();
  const { people } = useSelector((state: RootState) => state.searchForm);
  const handleClose = () => {
    dispatch(searchFormSlice.actions.hidePeopleField());
  };
  const peopleInput = useNumberInput({
    step: 1,
    defaultValue: people.value,
    min: 0,
    max: 10,
    onChange: (_, valueAsNumber) => {
      dispatch(
        searchFormSlice.actions.changePeopleValue({ value: valueAsNumber })
      );
    },
  });

  return {
    handleClose,
    peopleInput,
  };
};
