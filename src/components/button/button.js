import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ children, icon }) => {
  return (
    <Button
      variant="contained"
      style={styles.button}
      startIcon={icon}
      className="xd"
    >
      {children}
    </Button>
  );
};

const styles = {
  button: {
    backgroundColor: "#FAB43C",
  },
};

export default CustomButton;
