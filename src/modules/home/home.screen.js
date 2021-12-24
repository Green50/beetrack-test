import React, { useState } from "react";
import HomeLayout from "./home.layout";

const HomeScreen = () => {
  const [modal, setmodal] = useState(false);
  const addUser = () => setmodal(!modal);

  return <HomeLayout addUser={addUser} modal={modal} />;
};

export default HomeScreen;
