import { useCombobox } from "downshift";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { searchFormSlice } from "../searchFromSlice";
import { API_URL } from "../../../../config";

export const usePresenter = () => {
  const dispatch = useDispatch();
  const [prefectures, setPrefectures] = useState<string[]>([]);
  const [inputItems, setInputItems] = useState<string[]>([]);
  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    id: "destinationField",
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      const matchedPrefectues = prefectures.filter((item) =>
        item.includes(inputValue)
      );
      setInputItems(matchedPrefectues);
      dispatch(searchFormSlice.actions.setDestination({ value: inputValue }));
    },
    onSelectedItemChange: ({ selectedItem }) => {
      dispatch(searchFormSlice.actions.setDestination({ value: selectedItem }));
    },
  });
  const handleClose = () => {
    dispatch(searchFormSlice.actions.hideDestinationField());
    setInputItems(prefectures);
  };
  const toast = useToast();

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get<{ name: string }[]>(
        `${API_URL}prefectures`
      );
      await setPrefectures(response.data.map((pref) => pref.name));
    };
    fetch().catch(() => {
      toast({
        title: "エラー",
        description:
          "申し訳ありません。問題が発生しました。再度お試しください。",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    });
  }, []);

  useEffect(() => {
    setInputItems(prefectures);
  }, [prefectures]);

  return {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
    inputItems,
    handleClose,
  };
};
