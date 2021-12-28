import { Dialog, Typography, Box } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";
import React from "react";

// Manejar con Redux
const ModalError = ({
  msj = "Estamos teniendo problemas con nuestros servicios, intentenlo más tarde.",
  openModal,
  handleCloseModal,
}) => {
  return (
    <Dialog className="modal-error" onClose={handleCloseModal} open={openModal}>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Typography
          className="modal-error__title"
          alignSelf={"center"}
          variant="h4"
        >
          Error
        </Typography>
        <ErrorOutline className="modal-error__icon" />
      </Box>
      <Typography variant="body2">{msj}</Typography>
    </Dialog>
  );
};

export default ModalError;
