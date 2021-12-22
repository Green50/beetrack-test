import React from "react";
import { Grid, OutlinedInput } from "@mui/material";
import CustomButton from "../../../../components/button/button";
import { AddCircle, Search } from "@mui/icons-material";

const Menu = () => {
  return (
    <Grid container>
      <Grid xs={6}>
        <OutlinedInput
          style={style.input}
          placeholder="Contacto nuevo..."
          startAdornment={
            <Search sx={{ marginRight: "12px", color: "#FAB43C" }} />
          }
        />
      </Grid>
      <Grid
        xs={6}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <CustomButton icon={<AddCircle />}>Nuevo Contacto</CustomButton>
      </Grid>
    </Grid>
  );
};

const style = {
  input: {
    backgroundColor: "#fff",
    height: "36px",
    width: "70%",
  },
};

export default Menu;
