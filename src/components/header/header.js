import { Typography, Box } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box paddingTop={2} paddingBottom={4}>
      <Typography variant="h5">
        <span style={{ color: "#989B9D" }}>Test </span>
        <span style={{ color: "#626262" }}>
          <b>Beetrack</b>
        </span>
      </Typography>
    </Box>
  );
};

const style = {
  title: {
    color: "#989B9D",
  },
};

export default Header;
