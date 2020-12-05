import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { searchRooms } from "./searchResultSlice";
import { RootState } from "../../../state/store";

export const usePresenter = ({ queryParameter }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.searchResult);
  const toast = useToast();

  useEffect(() => {
    if (queryParameter.length < 1) {
      return;
    }
    try {
      dispatch(searchRooms(queryParameter));
    } catch (err) {
      toast({
        title: "エラー",
        description:
          "申し訳ありません。問題が発生しました。再度お試しください。",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [queryParameter]);

  return {
    loading,
  };
};
