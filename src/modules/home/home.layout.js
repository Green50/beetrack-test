import {
  Container,
  Dialog,
  Typography,
  Box,
  InputLabel,
  Button,
  InputBase,
} from "@mui/material";
import React from "react";
import Header from "../../components/header/header";
import Menu from "./components/menu/menu";
import UserList from "./components/userList/userList";

const HomeLayout = ({ addUser, modal }) => {
  return (
    <Container maxWidth="lg" sx={{ paddingBottom: "32px" }}>
      <Header />
      <Menu addUser={addUser} />
      <UserList />
      <Dialog open={modal} onClose={addUser}>
        <Box flexDirection={"column"}>
          <Typography className="modal-header">
            Agregar nuevo contacto
          </Typography>

          <form
            className="add-user-form"
            onSubmit={(e) => {
              e.preventDefault();
              addUser();
            }}
          >
            <InputLabel className="add-user-form__label" htmlFor="my-input">
              URL Imagen de perfil
            </InputLabel>
            <InputBase type="text" className="add-user-form__input" required />
            <InputLabel className="add-user-form__label" htmlFor="my-input">
              Nombre
            </InputLabel>
            <InputBase type="text" required className="add-user-form__input" />
            <InputLabel className="add-user-form__label" htmlFor="my-input">
              Descripción
            </InputLabel>
            <InputBase
              rows={3}
              multiline={true}
              type="text"
              required
              className="add-user-form__input"
            />
            <Button
              className="add-user-form__button"
              color="primary"
              variant="contained"
              type="submit"
            >
              Guardar
            </Button>
          </form>
        </Box>
      </Dialog>
    </Container>
  );
};

export default HomeLayout;
