import { Box, Button, Grid, IconButton } from "@chakra-ui/react";
import React from "react";
import { BiSearch, BiX } from "react-icons/bi";

export const BottomBar: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <Box
      position="fixed"
      left={0}
      right={0}
      bottom={0}
      p={4}
      zIndex={1}
      backgroundColor="white"
    >
      <Grid gap={1} gridTemplateColumns="1fr 1fr">
        <IconButton
          width="100%"
          aria-label="close"
          icon={<BiX />}
          variant="outline"
          colorScheme="teal"
          onClick={onClose}
        />
        <Button
          type="submit"
          width="100%"
          colorScheme="blue"
          leftIcon={<BiSearch />}
        >
          検索
        </Button>
      </Grid>
    </Box>
  );
};
