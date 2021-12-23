import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CardUser = () => {
  return (
    <Box className="cardUser">
      <Box className="cardUser__img"></Box>
      <Box className="cardUser__name">
        <Typography variant="subtitle1">Cristopher Herrera </Typography>
        <Typography
          display="none"
          className="cardUser__delete"
          variant="caption"
        >
          Eliminar
        </Typography>
      </Box>
    </Box>
  );
};

export default CardUser;
