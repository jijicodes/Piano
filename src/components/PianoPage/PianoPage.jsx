import React, { useContext } from "react";
import { Box, Keyboard, ResponsiveContext, Text } from "grommet";
import { PianoKeyboard } from "../PianoKeyboard/PianoKeyboard";

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

const play = (fValue) => {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  var ctx = new AudioContext();
  var o = ctx.createOscillator();
  o.type = "square";
  o.frequency.value = fValue;
  o.start(0);
  o.connect(ctx.destination);

  setTimeout(() => o.stop(0), 200);
};

const first = {
  a: notes["C"],
  s: notes["D"],
  d: notes["E"],
  f: notes["F"],
  g: notes["G"],
  h: notes["A"],
  j: notes["B"],

  w: notes["C#"],
  e: notes["D#"],
  r: notes["F#"],
  t: notes["G#"],
  y: notes["A#"],
};

const second = {
  z: notes["C"] * 2,
  x: notes["D"] * 2,
  c: notes["E"] * 2,
  v: notes["F"] * 2,
  b: notes["G"] * 2,
  n: notes["A"] * 2,
  m: notes["B"] * 2,

  u: notes["C#"] * 2,
  i: notes["D#"] * 2,
  o: notes["F#"] * 2,
  p: notes["G#"] * 2,
  l: notes["A#"] * 2,
};

const letter = { ...first, ...second };

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
            border={{ color: "black", size: "small" }}
          >
            <PianoKeyboard
              width={180}
              onKeyPress={(key) => play(notes[key])}
              letterSound={Object.keys(first)}
            />
            <PianoKeyboard
              width={180}
              onKeyPress={(key) => play(notes[key] * 2)}
              letterSound={Object.keys(second)}
            />
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
              <Keyboard
                onKeyDown={(e) => letter[e.key] && play(letter[e.key])}
                target="document"
              >
                <PianoKeyboard
                  width={300}
                  onKeyPress={(key) => play(notes[key])}
                  letterSound={Object.keys(first)}
                />
                <PianoKeyboard
                  width={300}
                  onKeyPress={(key) => play(notes[key] * 2)}
                  letterSound={Object.keys(second)}
                />
              </Keyboard>
            </Box>
          </Box>
          <Box>&nbsp;</Box>
        </Box>
      )}
    </Box>
  );
};
