import React from "react";
import { Box } from "grommet";
import { Footer } from "../Footer/Footer";
// import { LandingPage } from "../LandinPage/LandingPage";
import { PianoPage } from "../PianoPage/PianoPage";

export const Display = () => {
  return (
    <Box fill justify="between">
      <PianoPage />
      <Footer />
    </Box>
  );
};
