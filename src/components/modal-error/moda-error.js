import { Dialog, Typography } from "@mui/material";
import React from "react";

// Manejar con Redux
const ModalError = ({
  msj = "Estamos teniendo problemas con nuestros servicios, intentenlo más tarde",
}) => {
  return (
    <Dialog>
      <Typography variant="h3">Error!</Typography>
      <Typography variant="body2">{msj}</Typography>
    </Dialog>
  );
};

export default ModalError;
