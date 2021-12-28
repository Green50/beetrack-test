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

const HomeLayout = ({
  addUser,
  modal,
  loading,
  data,
  nextPage,
  backPage,
  handleChangeText,
  textValue,
  dataFilter,
  sendForm,
  handleDelete,
}) => {
  return (
    <Container maxWidth="lg" sx={{ paddingBottom: "32px" }}>
      <Header />
      <Menu
        loading={loading}
        addUser={addUser}
        handleChangeText={handleChangeText}
        textValue={textValue}
      />
      <UserList
        loading={loading}
        data={textValue ? dataFilter : data}
        nextPage={nextPage}
        backPage={backPage}
        handleDelete={handleDelete}
      />
      <Dialog open={modal} onClose={addUser}>
        <Box flexDirection={"column"}>
          <Typography className="modal-header">
            Agregar nuevo contacto
          </Typography>

          <form className="add-user-form" onSubmit={sendForm}>
            <InputLabel className="add-user-form__label" htmlFor="my-input">
              URL Imagen de perfil
            </InputLabel>
            <InputBase
              name="photo"
              type="text"
              className="add-user-form__input"
              required
            />
            <InputLabel className="add-user-form__label" htmlFor="my-input">
              Nombre
            </InputLabel>
            <InputBase
              name="name"
              type="text"
              required
              className="add-user-form__input"
            />
            <InputLabel className="add-user-form__label" htmlFor="my-input">
              Descripción
            </InputLabel>
            <InputBase
              name="description"
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
