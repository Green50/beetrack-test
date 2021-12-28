import axios from "axios";

// Llamada al servicio de obtener usuarios
// (limit: cantidad de usuarios por petición)
// (page: página en la que se desea buscar)
// (text: texto por el que se desea buscar)
export const getUserService = async ({ limit = "", page = "", text = "" }) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BEETRACK_API}/users?_limit=${limit}&_page=${page}&q=${text}`
  );
  return response.data;
};

// Llamada al servicio para ingresar un usuario
// (photo: url de la imágen del usuario)
// (name: nombre del usuario)
// (description: descripción del usuario)
export const postUserService = async (photo, name, description) => {
  const config = axios({
    method: "POST",
    url: "/users",
    baseURL: process.env.REACT_APP_BEETRACK_API,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      photo: photo,
      name: name,
      description: description,
    },
  });
  const response = await config;
  return response;
};

// Llamada al servicio para eliminar al usuario
// (id: id por el cual se va a eliminar el usuario)
export const deleteUserService = async (id) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_BEETRACK_API}/users/${id}`
  );
  return response;
};
