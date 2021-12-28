import Home from "./modules/home/home.screen";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./material.styles";
import { Provider } from "react-redux";
import generateStore from "./store";

const store = generateStore();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
