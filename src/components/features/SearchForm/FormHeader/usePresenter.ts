import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../state/store";
import { searchFormSlice } from "../searchFromSlice";

export const usePresenter = () => {
  const dispatch = useDispatch();
  const handleHideSearchForm = () => {
    dispatch(searchFormSlice.actions.hideForm());
  };
  const handleShowDestinationField = () => {
    dispatch(searchFormSlice.actions.showDestinationField());
  };
  const { isFormVisible } = useSelector((state: RootState) => state.searchForm);

  return {
    handleHideSearchForm,
    handleShowDestinationField,
    isFormVisible,
  };
};
