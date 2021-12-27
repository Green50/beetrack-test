import axios from "axios";

export const getUser = async ({ limit = "", page = "", text = "" }) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BEETRACK_API}/users?_limit=${limit}&_page=${page}&q=${text}`
  );
  return response.data;
};
