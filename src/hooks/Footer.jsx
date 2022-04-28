import React, { useContext } from "react";
import { Box, Anchor, ResponsiveContext } from "grommet";
import { Github } from "grommet-icons";

export const Footer = () => {
  const size = useContext(ResponsiveContext);
  const phrase = (
    <p align="center" font-size="8px" style={{ color: "black" }}>
      Handcrafted in Denver, CO <br /> by Jijicodes{" "}
      <Github color="white" size={size === "small" ? "small" : "medium"} />
    </p>
  );
  console.log(size, "sixe");
  return (
    <Box align="center" fill="horizontal">
      <Box
        align="center"
        justify="center"
        width={size === "small" ? "-10vw" : "50vw"}
        gap="medium"
        margin={size === "small" ? "-12vh" : "-8vh"}
      >
        <Anchor
          size={size === "small" ? "small" : "medium"}
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://github.com/jijicodes"
          label={phrase}
        />
      </Box>
    </Box>
  );
};
