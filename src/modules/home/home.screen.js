import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  nexPageActions,
  backPageActions,
  getDataHomeActions,
} from "../../redux/home.reducers";
import {
  deleteUserService,
  getUserService,
  postUserService,
} from "../../services/user.services";
import HomeLayout from "./home.layout";
import { limit } from "../../config/homeData.config";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { actuallyPage } = useSelector((state) => state.HomeReducers);
  const [loading, setLoading] = useState(true);
  const [modal, setmodal] = useState(false);
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await Promise.all([
          getUserService({}),
          getUserService({ limit }),
        ]);
        dispatch(getDataHomeActions(response[0].length));
        setData(response[1]);
      } catch (e) {
        // Validar Error
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const addUser = () => {
    setmodal(!modal);
  };

  const nextPage = async () => {
    try {
      setLoading(true);
      const response = await getUserService({ limit, page: actuallyPage + 1 });
      setData(response);
      dispatch(nexPageActions());
      setTextValue("");
    } catch (error) {
      // Validar Error
    } finally {
      setLoading(false);
    }
  };
  const backPage = async () => {
    try {
      setLoading(true);
      const response = await getUserService({ limit, page: actuallyPage - 1 });
      setData(response);
      dispatch(backPageActions());
      setTextValue("");
    } catch (error) {
      // Validar Error
    } finally {
      setLoading(false);
    }
  };

  const handleChangeText = async (e) => {
    const { value } = e.target;
    const auxData = data.filter((obj) =>
      obj.name.toUpperCase().includes(value.toUpperCase())
    );
    setTextValue(value);
    setDataFilter(auxData);
  };

  const handleSendForm = async (e) => {
    try {
      e.preventDefault();
      const { photo, name, description } = e.target.elements;
      await postUserService(photo.value, name.value, description.value);
      const response = await Promise.all([
        getUserService({}),
        getUserService({ limit, page: actuallyPage }),
      ]);
      dispatch(getDataHomeActions(response[0].length));
      setData(response[1]);
      setmodal(!modal);
    } catch (error) {
      console.log(error, "ERROR");
      // Validar Error
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUserService(id);
      const response = await Promise.all([
        getUserService({}),
        getUserService({ limit, page: actuallyPage }),
      ]);
      dispatch(getDataHomeActions(response[0].length));
      setTextValue("");
      if (response[1].length < 1) {
        const withoutResponse = await getUserService({
          limit,
          page: actuallyPage - 1,
        });
        dispatch(backPageActions());
        return setData(withoutResponse);
      }
      setData(response[1]);
    } catch (error) {
      console.log(error);
      // Validar Error
    }
  };

  return (
    <HomeLayout
      addUser={addUser}
      modal={modal}
      loading={loading}
      data={data}
      nextPage={nextPage}
      backPage={backPage}
      handleChangeText={handleChangeText}
      dataFilter={dataFilter}
      textValue={textValue}
      sendForm={handleSendForm}
      handleDelete={handleDelete}
    />
  );
};

export default HomeScreen;
