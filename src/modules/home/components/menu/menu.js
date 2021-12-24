import React from "react";
import { Grid, OutlinedInput } from "@mui/material";
import CustomButton from "../../../../components/button/button";
import { AddCircle, Search } from "@mui/icons-material";

const Menu = ({ addUser }) => {
  return (
    <Grid container className="menu">
      <Grid item xs={6}>
        <OutlinedInput
          className="menu__input"
          placeholder="Contacto nuevo..."
          startAdornment={
            <Search sx={{ marginRight: "12px", color: "#FAB43C" }} />
          }
        />
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <CustomButton onClick={addUser} icon={<AddCircle />}>
          Nuevo Contacto
        </CustomButton>
      </Grid>
    </Grid>
  );
};

export default Menu;
