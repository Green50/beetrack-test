import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fab43c",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#fab43c",
          color: "#FFFFFF",
          boxShadow: "none",
          borderRadius: "3px",
          "&:hover": {
            backgroundColor: "#fab43c",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#626262",
          border: "1px solid #dedfe0",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#626262",
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#F9F9F9",
          borderRadius: "0px",
        },
      },
    },
  },
});
