import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ children, icon }) => {
  return (
    <Button className="button" variant="contained" startIcon={icon}>
      {children}
    </Button>
  );
};

export default CustomButton;
