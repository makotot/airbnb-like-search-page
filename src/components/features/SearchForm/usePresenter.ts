import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

export const usePresenter = () => {
  const { destination, dateRange, people } = useSelector(
    (state: RootState) => state.searchForm
  );

  return {
    destination,
    dateRange,
    people,
  };
};
