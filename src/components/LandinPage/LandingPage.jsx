import React, { useContext, useState, useEffect } from "react";
import { Box, Button, Text, Layer, ResponsiveContext } from "grommet";

import { useTimeout } from "../../hooks/useTimeout";

export const LandingPage = ({}) => {
  const size = useContext(ResponsiveContext);
  const [on, setOn] = useState(false);
  useTimeout({ callback: () => setOn(true) });

  return (
    <Box
      fill
      background={{
        size: "contain",
        image: `url(${process.env.PUBLIC_URL}landingPage.gif)`,
      }}
    >
      {on && (
        <Layer
          responsive={false}
          onClickOutside={() => setOn(false)}
          onEsc={() => setOn(false)}
        >
          {size === "small" ? (
            <Box>small</Box>
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
                  onClick={() => console.log("clicked")}
                />
              </Box>
            </Box>
          )}
        </Layer>
      )}
    </Box>
  );
};
