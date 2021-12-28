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
import { getErrorActions } from "../../redux/main.reducers";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { actuallyPage } = useSelector((state) => state.HomeReducers);
  const [loading, setLoading] = useState(true);
  const [modal, setmodal] = useState(false);
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [textValue, setTextValue] = useState("");

  // Metodo que extrae el total de servicios y el servicio por limite para llevar la contabilidad de la paginación
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
        dispatch(getErrorActions(true));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Método para ocultar/aparecer el modal
  const addUser = () => {
    setmodal(!modal);
  };

  // Método para avanzar de página
  const nextPage = async () => {
    try {
      setLoading(true);
      const response = await getUserService({ limit, page: actuallyPage + 1 });
      setData(response);
      setTextValue("");
      dispatch(nexPageActions());
    } catch (error) {
      dispatch(getErrorActions(true));
    } finally {
      setLoading(false);
    }
  };

  // Método para retroceder de página
  const backPage = async () => {
    try {
      setLoading(true);
      const response = await getUserService({ limit, page: actuallyPage - 1 });
      setData(response);
      setTextValue("");
      dispatch(backPageActions());
    } catch (error) {
      dispatch(getErrorActions(true));
    } finally {
      setLoading(false);
    }
  };

  // Método para buscar al usuario en base a su nombre
  const handleChangeText = async (e) => {
    const { value } = e.target;
    const auxData = data.filter((obj) =>
      obj.name.toUpperCase().includes(value.toUpperCase())
    );
    setTextValue(value);
    setDataFilter(auxData);
  };

  // Método para ingresar un usuario mediante el modal del formulario
  const handleSendForm = async (e) => {
    try {
      e.preventDefault();
      const { photo, name, description } = e.target.elements;
      await postUserService(photo.value, name.value, description.value);
      // Se llama al servicio de usuario para obtener las nuevas cantidades de usuarios
      const response = await Promise.all([
        getUserService({}),
        getUserService({ limit, page: actuallyPage }),
      ]);
      setData(response[1]);
      setmodal(!modal);
      dispatch(getDataHomeActions(response[0].length));
      // En caso de encontrarse sin páginas se le suma 1 para que no aparezca el botón next
      // if (actuallyPage <= 0) dispatch(nexPageActions());
    } catch (error) {
      dispatch(getErrorActions(true));
    }
  };

  // Método para eliminar al usuario mediante su delete presionando la row correspondiente
  const handleDelete = async (id) => {
    try {
      await deleteUserService(id);
      // Se llaman a los usuarios de nuevo para actualizar la página
      const response = await Promise.all([
        getUserService({}),
        getUserService({ limit, page: actuallyPage }),
      ]);
      setTextValue("");
      dispatch(getDataHomeActions(response[0].length));
      // En caso de que elimine todos los usuarios de una página se llamará nuevamente al servicio pero de la página anterior
      if (response[1].length < 1) {
        const withoutResponse = await getUserService({
          limit,
          page: actuallyPage - 1,
        });
        // En caso de haber datos en la página anterior retrocedemos una página
        if (withoutResponse.length > 0) dispatch(backPageActions());
        return setData(withoutResponse);
      }
      setData(response[1]);
    } catch (error) {
      dispatch(getErrorActions(true));
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
