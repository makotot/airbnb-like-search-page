import { Box, Grid, IconButton, Stack } from "@chakra-ui/react";
import React from "react";
import { BiCaretDown } from "react-icons/bi";
import { BottomBar } from "../BottomBar";
import { WEEK_DAYS } from "./config";
import { Month } from "./Month";
import { usePresenter } from "./usePresenter";

export const DateRangePicker: React.FC = () => {
  const { startingDates, handleClose, handleIncrementMonth } = usePresenter();

  return (
    <>
      <Grid
        gridTemplateColumns="repeat(7, 1fr)"
        position="sticky"
        top={0}
        backgroundColor="whitesmoke"
      >
        {WEEK_DAYS.map((weekday) => {
          return (
            <Box
              display="block"
              p={4}
              fontWeight="bold"
              textAlign="center"
              key={weekday}
            >
              {weekday}
            </Box>
          );
        })}
      </Grid>
      <Box marginTop={4}>
        <Stack spacing={4} shouldWrapChildren>
          {startingDates.map((date) => (
            <Month key={date.toDateString()} startingDate={date} />
          ))}
        </Stack>
      </Box>
      <Box textAlign="center">
        <IconButton
          width="100%"
          icon={<BiCaretDown />}
          aria-label="Next month"
          variant="ghost"
          onClick={handleIncrementMonth}
        />
      </Box>
      <BottomBar onClose={handleClose} />
    </>
  );
};
