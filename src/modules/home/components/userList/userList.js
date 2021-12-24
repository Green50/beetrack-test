import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import CardUser from "../cardUser/cardUser";
import { ArrowCircleRight, ArrowCircleLeft } from "@mui/icons-material";

const UserList = () => {
  return (
    <>
      <TableContainer component={Paper} className="table-container">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ width: "40%" }}
                className="table-container__head"
              >
                Nombre
              </TableCell>
              <TableCell
                sx={{ width: "60%" }}
                className="table-container__head"
              >
                Descripción
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((row) => (
              <TableRow
                className="table-container__row"
                key={row}
                sx={{ "&:last-child td, &:last-child th": { borderBottom: 0 } }}
              >
                <TableCell className="table-container__body" component="th">
                  <CardUser />
                </TableCell>
                <TableCell className="table-container__desc">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className="paginator">
        <Box className="paginator__page">
          <ArrowCircleLeft className="paginator__icon paginator__icon--previous" />
          <Typography variant="body2" fontWeight={"bold"}>
            Página anterior
          </Typography>
        </Box>

        <Box className="paginator__page">
          <Typography variant="body2" fontWeight={"bold"}>
            Siguiente página
          </Typography>
          <ArrowCircleRight className="paginator__icon paginator__icon--next" />
        </Box>
      </Box>
    </>
  );
};

export default UserList;
