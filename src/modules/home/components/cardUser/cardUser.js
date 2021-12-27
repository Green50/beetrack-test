import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CardUser = ({ name, img }) => {
  return (
    <Box className="cardUser">
      <Avatar src={img} className="cardUser__img"></Avatar>
      <Box className="cardUser__name">
        <Typography variant="subtitle1">{name}</Typography>
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
