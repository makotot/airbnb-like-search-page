import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

export const usePresenter = () => {
  const { destination } = useSelector((state: RootState) => state.searchForm);
  const handleSubmit = () => {
    console.log("submit");
  };

  return {
    destination,
    handleSubmit,
  };
};
