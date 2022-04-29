import React, { useContext } from "react";
import { Box, ResponsiveContext, Text } from "grommet";
import { Keyboard } from "../Keyboard/Keyboard";

export const PianoPage = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Box justify="around" align="center" direction="column" fill>
      {size === "small" ? (
        <Box>
          <Text size="xxlarge" alignSelf="center" margin={{ bottom: "60px" }}>
            Play like Beethoven
          </Text>
          <Box
            direction="row"
            justify="center"
            border={{ color: "black", size: "medium" }}
          >
            <Keyboard width={180} />
            <Keyboard width={180} />
          </Box>
          <Box>&nbsp;</Box>
        </Box>
      ) : (
        <Box>
          <Text alignSelf="center" margin={{ bottom: "60px" }} size="90px">
            Play like Beethoven
          </Text>
          <Box direction="row" justify="center">
            <Box border={{ color: "black", size: "medium" }} direction="row">
              <Keyboard width={300} /> <Keyboard width={300} />
            </Box>
          </Box>
          <Box>&nbsp;</Box>
        </Box>
      )}
    </Box>
  );
};
