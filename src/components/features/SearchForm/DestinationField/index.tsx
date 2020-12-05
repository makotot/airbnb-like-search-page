import { Box, Input, Link } from "@chakra-ui/react";
import React from "react";
import { BottomBar } from "../BottomBar";
import { usePresenter } from "./usePresenter";

export const DestinationField: React.FC = () => {
  const {
    getComboboxProps,
    getInputProps,
    getMenuProps,
    isOpen,
    highlightedIndex,
    getItemProps,
    inputItems,
    handleClose,
  } = usePresenter();

  return (
    <>
      <Box {...getComboboxProps()}>
        <Input {...getInputProps()} />
      </Box>
      <Box {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <Link
              width="100%"
              display="block"
              p={2}
              backgroundColor={
                index === highlightedIndex ? "blue.500" : "white"
              }
              color={index === highlightedIndex ? "white" : "blue.500"}
              _hover={{
                backgroundColor: "blue.500",
                color: "white",
              }}
              {...getItemProps({ item, index })}
              key={`${item}_${index}`}
            >
              {item}
            </Link>
          ))}
      </Box>
      <BottomBar onClose={handleClose} />
    </>
  );
};
