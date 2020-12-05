import React from "react";
import { Box, Grid, Text, CloseButton, Button } from "@chakra-ui/react";
import { Header } from "../Header";
import { usePresenter } from "./usePresenter";
import { BiCalendar, BiSearch } from "react-icons/bi";

export const FormHeader: React.FC = () => {
  const {
    isFormVisible,
    handleHideSearchForm,
    handleShowDestinationField,
    handleShowDateRangePicker,
  } = usePresenter();

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
          <Box marginTop={2}>
            <Button
              width="100%"
              leftIcon={<BiSearch />}
              onClick={handleShowDestinationField}
            >
              行き先
            </Button>
            <Grid marginTop={1} gap={1} gridTemplateColumns="1fr 1fr">
              <Button
                width="100%"
                leftIcon={<BiCalendar />}
                onClick={handleShowDateRangePicker}
              >
                日付
              </Button>
            </Grid>
          </Box>
        </Box>
      </Header>
    </Box>
  );
};
