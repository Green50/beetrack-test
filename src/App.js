import { useState, useEffect } from "react";
import Home from "./modules/home/home.screen";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./material.styles";
import { useSelector, useDispatch } from "react-redux";
import ModalError from "./components/modal-error/moda-error";
import { getErrorActions } from "./redux/main.reducers";

const App = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const { error } = useSelector((state) => state.MainReducers);
  const handleCloseModal = () => {
    setOpenModal(!openModal);
    dispatch(getErrorActions(false));
  };

  useEffect(() => {
    if (error) {
      setOpenModal(true);
    }
  }, [error]);

  return (
    <ThemeProvider theme={theme}>
      <Home />
      <ModalError openModal={openModal} handleCloseModal={handleCloseModal} />
    </ThemeProvider>
  );
};

export default App;
