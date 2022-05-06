import React, { useContext, useState } from "react";
import { Box, Button, Text, Layer, ResponsiveContext } from "grommet";
import { useTimeout } from "../../hooks/useTimeout";

export const LandingPage = ({ onGo }) => {
  const size = useContext(ResponsiveContext);
  const [on, setOn] = useState(false);

  useTimeout({ callback: () => setOn(true) });

  return (
    <Box
      fill
      background={{
        size: "contain",
        image: `url(${process.env.PUBLIC_URL}/landingPage.gif)`,
      }}
    >
      {on && (
        <Layer
          responsive={false}
          onClickOutside={() => setOn(false)}
          onEsc={() => setOn(false)}
        >
          {size === "small" ? (
            <Box direction="column" gap="small" align="center">
              <Text
                weight="bold"
                size="small"
                textAlign="center"
                margin={{
                  top: "small",
                  left: "small",
                  right: "small",
                  bottom: "none",
                }}
              >
                Ready to be the next Grammy Awards Winner?
              </Text>
              <Box width="50px" margin={{ bottom: "small" }}>
                <Button
                  size="xsmall"
                  primary
                  color="#39AD9C"
                  hoverIndicator={{ weight: "bolder" }}
                  label="Go"
                  onClick={onGo}
                  alignSelf="center"
                />
              </Box>
            </Box>
          ) : (
            <Box direction="column" gap="medium">
              <Text
                weight="bold"
                size="medium"
                textAlign="center"
                margin="small"
              >
                Ready to be the next Grammy Awards Winner?
              </Text>
              <Box
                width="100px"
                margin={{ bottom: "small" }}
                alignSelf="center"
              >
                <Button
                  primary
                  color="#39AD9C"
                  hoverIndicator={{ weight: "bolder" }}
                  label="Go"
                  onClick={onGo}
                />
              </Box>
            </Box>
          )}
        </Layer>
      )}
    </Box>
  );
};
