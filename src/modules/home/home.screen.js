import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/call-service";
import { getUser } from "../../services/user.services";
import HomeLayout from "./home.layout";

const HomeScreen = () => {
  const [modal, setmodal] = useState(false);
  const { data, loading, error } = useFetch(() => getUser({}));

  const addUser = () => setmodal(!modal);
  return (
    <HomeLayout
      addUser={addUser}
      modal={modal}
      loading={loading}
      error={error}
      data={data}
    />
  );
};

export default HomeScreen;
