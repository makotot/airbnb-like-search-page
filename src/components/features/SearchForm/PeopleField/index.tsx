import React from "react";
import { Input, Button, Box, NumberInput, Stack, Grid } from "@chakra-ui/react";
import { BottomBar } from "../BottomBar";
import { usePresenter } from "./usePresenter";

export const PeopleField: React.FC = () => {
  const { peopleInput, handleClose } = usePresenter();

  return (
    <>
      <Box>
        <NumberInput>
          <Stack shouldWrapChildren>
            <Input {...peopleInput.getInputProps()} />
            <Grid gap={1} gridAutoFlow="column">
              <Button {...peopleInput.getDecrementButtonProps()}>-</Button>
              <Button {...peopleInput.getIncrementButtonProps()}>+</Button>
            </Grid>
          </Stack>
        </NumberInput>
      </Box>
      <BottomBar onClose={handleClose} />
    </>
  );
};
