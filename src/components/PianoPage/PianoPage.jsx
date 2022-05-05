import React, { useContext } from "react";
import { Box, ResponsiveContext, Text } from "grommet";
import { Keyboard } from "../Keyboard/Keyboard";

const play = (fValue) => {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  var ctx = new AudioContext();
  var o = ctx.createOscillator();
  o.type = "square";
  o.frequency.value = fValue;
  o.start(0);
  o.connect(ctx.destination);

  setTimeout(() => o.stop(0), 500);
};

const notes = {
  C: 261.63,
  "C#": 277.18,
  D: 293.66,
  "D#": 311.13,
  E: 329.63,
  F: 349.23,
  "F#": 369.99,
  G: 392.0,
  "G#": 415.3,
  A: 440.0,
  "A#": 466.16,
  B: 493.88,
  // C2: 523.25,
};

export const PianoPage = () => {
  const size = useContext(ResponsiveContext);
  console.log({ notes });

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
            <Keyboard
              width={180}
              onKeyPress={(key) => {
                console.log("yeah", key);
              }}
            />
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
              <Keyboard width={300} onKeyPress={(key) => play(notes[key])} />

              <Keyboard
                width={300}
                onKeyPress={(key) => play(notes[key] * 2)}
              />
            </Box>
          </Box>
          <Box>&nbsp;</Box>
        </Box>
      )}
    </Box>
  );
};
