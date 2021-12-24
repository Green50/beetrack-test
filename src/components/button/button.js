import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ children, icon, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="button"
      variant="contained"
      startIcon={icon}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
