import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import { CalendarDate } from "../CalendarDate";
import { DateLink } from "../DateLink";
import { usePresenter } from "./usePresenter";

export const Month: React.FC<{ startingDate: Date }> = ({ startingDate }) => {
  const {
    calendarYearMonth,
    monthDays,
    dateRange,
    getDateStatus,
  } = usePresenter({
    startingDate,
  });

  return (
    <Box>
      <Box textAlign="center" fontWeight="bold">
        {calendarYearMonth.formatted}
      </Box>
      <Grid gridTemplateColumns="repeat(7, 1fr)">
        {monthDays.map((day) => {
          const calendarDate = CalendarDate.create(day);

          if (!calendarDate.isSameMonth(startingDate)) {
            return <Box display="block" p={4} key={day.toDateString()} />;
          }
          if (calendarDate.unlessFuture()) {
            return (
              <Box
                display="block"
                p={4}
                key={day.toDateString()}
                textAlign="center"
                color="grey"
              >
                {calendarDate.value}
              </Box>
            );
          }

          return (
            <DateLink
              key={day.toDateString()}
              day={day}
              status={getDateStatus({
                start: dateRange.value.start,
                end: dateRange.value.end,
                calendarDate: calendarDate,
              })}
            />
          );
        })}
      </Grid>
    </Box>
  );
};
