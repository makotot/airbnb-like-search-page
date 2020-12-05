import React from "react";
import { Box, Grid, Text, CloseButton } from "@chakra-ui/react";
import { Header } from "../Header";
import { usePresenter } from "./usePresenter";

export const FormHeader: React.FC = () => {
  const { isFormVisible, handleHideSearchForm } = usePresenter();

  return (
    <Box display={isFormVisible ? "block" : "none"}>
      <Header>
        <Box p={4}>
          <Box>
            <Grid gridTemplateColumns="1fr 1fr 1fr">
              <CloseButton size="md" onClick={handleHideSearchForm} />
              <Box textAlign="center">
                <Text fontWeight="bold">検索条件</Text>
              </Box>
            </Grid>
          </Box>
          <Box marginTop={2}>fields</Box>
        </Box>
      </Header>
    </Box>
  );
};
