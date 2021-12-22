import { Box, TextField, AccountCircle } from "@mui/material";
import React from "react";

const Input = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      <TextField id="input-with-sx" label="With sx" variant="standard" />
    </Box>
  );
};

export default Input;
