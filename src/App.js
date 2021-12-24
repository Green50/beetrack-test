import Home from "./modules/home/home.screen";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./material.styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
