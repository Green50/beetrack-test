import { Container } from "@mui/material";
import React from "react";
import Header from "../../components/header/header";
import Menu from "./components/menu/menu";
import UserList from "./components/userList/userList";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <Menu />
      <UserList />
    </Container>
  );
};

export default Home;
