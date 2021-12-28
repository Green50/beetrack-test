import axios from "axios";

export const getUserService = async ({ limit = "", page = "", text = "" }) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BEETRACK_API}/users?_limit=${limit}&_page=${page}&q=${text}`
  );
  return response.data;
};

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

export const deleteUserService = async (id) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_BEETRACK_API}/users/${id}`
  );
  console.log(response, "RESPONSE");
  return response;
};
