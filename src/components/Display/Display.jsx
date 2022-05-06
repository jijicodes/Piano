import React, { useState } from "react";
import { Box } from "grommet";
import { Footer } from "../Footer/Footer";
import { LandingPage } from "../LandinPage/LandingPage";
import { PianoPage } from "../PianoPage/PianoPage";

export const Display = () => {
  const [displayPiano, setDisplayPiano] = useState(false);
  return (
    <Box fill justify="between">
      {displayPiano ? (
        <PianoPage />
      ) : (
        <LandingPage
          onGo={() => {
            setDisplayPiano(true);
          }}
        />
      )}
      <Footer />
    </Box>
  );
};
