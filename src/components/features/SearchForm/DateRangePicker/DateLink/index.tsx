import { Link } from "@chakra-ui/react";
import React from "react";
import { DateStatus } from "../types";
import { usePresenter } from "./usePresenter";

export const DateLink: React.FC<{ day: Date; status?: DateStatus }> = ({
  day,
  status,
}) => {
  const { calendarDate, handleSelectDate } = usePresenter({ day });

  return (
    <Link
      display="block"
      p={4}
      color={status ? "white" : "grey.700"}
      backgroundColor={status ? "blue.500" : "white"}
      _hover={{
        backgroundColor: "blue.500",
        color: "white",
      }}
      textAlign="center"
      data-calendar-date={calendarDate.dashed}
      key={calendarDate.dashed}
      onClick={handleSelectDate}
    >
      {calendarDate.value}
    </Link>
  );
};
