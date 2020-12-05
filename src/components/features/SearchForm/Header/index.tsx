import React from "react";
import { Box } from "@chakra-ui/react";

export const Header: React.FC = ({ children }) => {
  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex={1}
      backgroundColor="white"
      boxShadow="rgba(0, 0, 0, 0.2) 0px 2px 8px"
    >
      {children}
    </Box>
  );
};
