import React from "react";
import { Button, Grid, OutlinedInput, Skeleton } from "@mui/material";
import { AddCircle, Search } from "@mui/icons-material";

const Menu = ({ addUser, loading, handleChangeText, textValue }) => (
  <Grid container className="menu">
    <Grid item xs={6}>
      {loading ? (
        <Skeleton
          variant="rectangular"
          height={"40px"}
          sx={{ maxWidth: "325px" }}
        ></Skeleton>
      ) : (
        <OutlinedInput
          onChange={handleChangeText}
          value={textValue}
          className="menu__input"
          placeholder="Buscar contacto..."
          startAdornment={
            <Search sx={{ marginRight: "12px", color: "#FAB43C" }} />
          }
        />
      )}
    </Grid>
    <Grid
      item
      xs={6}
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      {loading ? (
        <Skeleton
          variant="rectangular"
          sx={{ width: "190px", height: "40px" }}
        ></Skeleton>
      ) : (
        <Button
          onClick={addUser}
          className="button"
          variant="contained"
          startIcon={<AddCircle />}
        >
          Nuevo Contacto
        </Button>
      )}
    </Grid>
  </Grid>
);
export default Menu;
