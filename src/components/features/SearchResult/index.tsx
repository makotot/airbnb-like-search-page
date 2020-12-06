import React from "react";
import { Alert, Box, Grid, Spinner, Stack } from "@chakra-ui/react";
import { usePresenter } from "./usePresenter";
import { Card } from "./Card";
import { Pagination } from "./Pagination";

export const SearchResult: React.FC<{
  queryParameter: string;
}> = ({ queryParameter }) => {
  const { loading, searchResultRooms, total } = usePresenter({
    queryParameter,
  });

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
          {searchResultRooms.length > 0 && loading === "end" && (
            <>
              <Box paddingY={4} fontWeight="bold">
                {total}件見つかりました。
              </Box>
              <Stack spacing={8} shouldWrapChildren>
                {searchResultRooms.map((room) => (
                  <Card key={room.id} room={room} />
                ))}
              </Stack>
            </>
          )}
          {searchResultRooms.length === 0 && loading === "end" && (
            <Alert status="warning">
              <Box p={4}>
                検索結果は0件です。検索条件を変更して再検索してみてください。
              </Box>
            </Alert>
          )}
        </Box>
      )}
      {searchResultRooms.length > 0 && <Pagination />}
    </>
  );
};
