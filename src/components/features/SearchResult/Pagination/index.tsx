import { Box, Button, Grid, Text, Link } from "@chakra-ui/react";
import React from "react";
import { usePresenter } from "./usePresenter";

export const Pagination: React.FC = () => {
  const { pagination, handleChangePage, currentPage } = usePresenter();

  return (
    <Box width="800px" margin="0 auto" paddingY={4}>
      <Grid gridAutoFlow="column" alignItems="center">
        {pagination.hasPrev() && (
          <Button onClick={handleChangePage} data-page={currentPage - 1}>
            prev
          </Button>
        )}
        {pagination.hasFirst() && (
          <Button onClick={handleChangePage} data-page={1}>
            1
          </Button>
        )}
        {pagination.isBackwardTrucated() && <span>&nbsp;...&nbsp;</span>}
        {pagination.pages.map((item, index) => {
          return pagination.currentPage === item ? (
            <Text key={index} fontWeight="bold" textAlign="center">
              &nbsp;{item}&nbsp;
            </Text>
          ) : (
            <Box key={index} textAlign="center">
              <Link href="#page" onClick={handleChangePage} data-page={item}>
                &nbsp;{item}&nbsp;
              </Link>
            </Box>
          );
        })}
        {pagination.isForwardTruncated() && <span>&nbsp;...&nbsp;</span>}
        {pagination.hasLast() && (
          <Button onClick={handleChangePage} data-page={pagination.totalPage}>
            {pagination.totalPage}
          </Button>
        )}
        {pagination.hasNext() && (
          <Button onClick={handleChangePage} data-page={currentPage + 1}>
            next
          </Button>
        )}
      </Grid>
    </Box>
  );
};
