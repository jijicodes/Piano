import React from "react";
import { Box, Header } from "grommet";
import { Keyboard } from "../Keyboard/Keyboard";

export const PianoPage = () => {
  return (
    <Box align="center" direction="column">
      <Header>Play like Beethoven</Header>
      <Box direction="row" justify="center">
        <Keyboard />
      </Box>
    </Box>
  );
};
