import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { Header } from "../Header";
import { usePresenter } from "./usePresenter";

export const SimpleHeader: React.FC = () => {
  const { handleShowSearchForm, isFormVisible } = usePresenter();

  return (
    <Box display={isFormVisible ? "none" : "block"}>
      <Header>
        <Flex height="100%" alignItems="center" justifyContent="center" p={4}>
          <Button rightIcon={<BiSearch />} onClick={handleShowSearchForm}>
            検索条件を指定する
          </Button>
        </Flex>
      </Header>
    </Box>
  );
};
