import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../state/store";
import { searchFormSlice } from "../searchFromSlice";

export const usePresenter = () => {
  const dispatch = useDispatch();
  const handleShowSearchForm = () => {
    dispatch(searchFormSlice.actions.showForm());
  };
  const { isFormVisible } = useSelector((state: RootState) => state.searchForm);

  return {
    handleShowSearchForm,
    isFormVisible,
  };
};
