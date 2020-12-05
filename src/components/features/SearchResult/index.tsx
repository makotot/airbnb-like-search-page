import React from "react";
import { Box, Grid, Spinner } from "@chakra-ui/react";
import { usePresenter } from "./usePresenter";

export const SearchResult: React.FC<{
  queryParameter: string;
}> = ({ queryParameter }) => {
  const { loading } = usePresenter({ queryParameter });

  return (
    <>
      {loading === "pending" ? (
        <Grid justifyContent="center" p={8}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Grid>
      ) : (
        <Box width="800px" margin="0 auto" paddingTop={8}>
          result
        </Box>
      )}
    </>
  );
};
