import React from "react";
import { Box } from "@chakra-ui/react";
import { usePresenter } from "./usePresenter";

export const FieldWrapper: React.FC<{ isVisible: boolean }> = ({
  isVisible,
  children,
}) => {
  usePresenter({ isVisible });

  return (
    <Box
      display={isVisible ? "block" : "none"}
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={1}
      backgroundColor="white"
      p={6}
      overflowY="auto"
      paddingBottom="64px"
    >
      {children}
    </Box>
  );
};
